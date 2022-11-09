import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostSetDefaultPolicyVersionActionEnum {
    SetDefaultPolicyVersion = "SetDefaultPolicyVersion"
}

export enum PostSetDefaultPolicyVersionVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class PostSetDefaultPolicyVersionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostSetDefaultPolicyVersionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostSetDefaultPolicyVersionVersionEnum;
}


export class PostSetDefaultPolicyVersionHeaders extends SpeakeasyBase {
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


export class PostSetDefaultPolicyVersionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostSetDefaultPolicyVersionQueryParams;

  @Metadata()
  headers: PostSetDefaultPolicyVersionHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostSetDefaultPolicyVersionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
