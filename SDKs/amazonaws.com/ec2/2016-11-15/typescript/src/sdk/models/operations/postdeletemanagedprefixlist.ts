import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDeleteManagedPrefixListActionEnum {
    DeleteManagedPrefixList = "DeleteManagedPrefixList"
}

export enum PostDeleteManagedPrefixListVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostDeleteManagedPrefixListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDeleteManagedPrefixListActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDeleteManagedPrefixListVersionEnum;
}


export class PostDeleteManagedPrefixListHeaders extends SpeakeasyBase {
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


export class PostDeleteManagedPrefixListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDeleteManagedPrefixListQueryParams;

  @Metadata()
  headers: PostDeleteManagedPrefixListHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDeleteManagedPrefixListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
