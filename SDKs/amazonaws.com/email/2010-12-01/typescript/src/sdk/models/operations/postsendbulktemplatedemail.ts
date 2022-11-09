import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostSendBulkTemplatedEmailActionEnum {
    SendBulkTemplatedEmail = "SendBulkTemplatedEmail"
}

export enum PostSendBulkTemplatedEmailVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostSendBulkTemplatedEmailQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostSendBulkTemplatedEmailActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostSendBulkTemplatedEmailVersionEnum;
}


export class PostSendBulkTemplatedEmailHeaders extends SpeakeasyBase {
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


export class PostSendBulkTemplatedEmailRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostSendBulkTemplatedEmailQueryParams;

  @Metadata()
  headers: PostSendBulkTemplatedEmailHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostSendBulkTemplatedEmailResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
