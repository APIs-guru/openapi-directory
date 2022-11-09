import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostListGroupsForUserActionEnum {
    ListGroupsForUser = "ListGroupsForUser"
}

export enum PostListGroupsForUserVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class PostListGroupsForUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostListGroupsForUserActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostListGroupsForUserVersionEnum;
}


export class PostListGroupsForUserHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class PostListGroupsForUserRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostListGroupsForUserQueryParams;

  @Metadata()
  headers: PostListGroupsForUserHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostListGroupsForUserResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
