import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDisableEbsEncryptionByDefaultActionEnum {
    DisableEbsEncryptionByDefault = "DisableEbsEncryptionByDefault"
}

export enum PostDisableEbsEncryptionByDefaultVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostDisableEbsEncryptionByDefaultQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDisableEbsEncryptionByDefaultActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDisableEbsEncryptionByDefaultVersionEnum;
}


export class PostDisableEbsEncryptionByDefaultHeaders extends SpeakeasyBase {
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


export class PostDisableEbsEncryptionByDefaultRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDisableEbsEncryptionByDefaultQueryParams;

  @Metadata()
  headers: PostDisableEbsEncryptionByDefaultHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDisableEbsEncryptionByDefaultResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
