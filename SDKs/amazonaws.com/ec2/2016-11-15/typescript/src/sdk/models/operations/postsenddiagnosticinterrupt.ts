import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostSendDiagnosticInterruptActionEnum {
    SendDiagnosticInterrupt = "SendDiagnosticInterrupt"
}

export enum PostSendDiagnosticInterruptVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostSendDiagnosticInterruptQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostSendDiagnosticInterruptActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostSendDiagnosticInterruptVersionEnum;
}


export class PostSendDiagnosticInterruptHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class PostSendDiagnosticInterruptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostSendDiagnosticInterruptQueryParams;

  @SpeakeasyMetadata()
  headers: PostSendDiagnosticInterruptHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostSendDiagnosticInterruptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
