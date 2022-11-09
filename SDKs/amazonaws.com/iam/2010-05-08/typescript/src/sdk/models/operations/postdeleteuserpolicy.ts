import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDeleteUserPolicyActionEnum {
    DeleteUserPolicy = "DeleteUserPolicy"
}

export enum PostDeleteUserPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class PostDeleteUserPolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDeleteUserPolicyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDeleteUserPolicyVersionEnum;
}


export class PostDeleteUserPolicyHeaders extends SpeakeasyBase {
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


export class PostDeleteUserPolicyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDeleteUserPolicyQueryParams;

  @Metadata()
  headers: PostDeleteUserPolicyHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDeleteUserPolicyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
