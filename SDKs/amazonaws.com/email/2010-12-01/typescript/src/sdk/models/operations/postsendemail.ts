import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostSendEmailActionEnum {
    SendEmail = "SendEmail"
}

export enum PostSendEmailVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostSendEmailQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostSendEmailActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostSendEmailVersionEnum;
}


export class PostSendEmailHeaders extends SpeakeasyBase {
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


export class PostSendEmailRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostSendEmailQueryParams;

  @Metadata()
  headers: PostSendEmailHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostSendEmailResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
