import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TransferCertificatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=certificateId" })
  certificateId: string;
}


export class TransferCertificateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=targetAwsAccount" })
  targetAwsAccount: string;
}


export class TransferCertificateHeaders extends SpeakeasyBase {
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


export class TransferCertificateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transferMessage" })
  transferMessage?: string;
}


export class TransferCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TransferCertificatePathParams;

  @SpeakeasyMetadata()
  queryParams: TransferCertificateQueryParams;

  @SpeakeasyMetadata()
  headers: TransferCertificateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: TransferCertificateRequestBody;
}


export class TransferCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateStateException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  transferCertificateResponse?: shared.TransferCertificateResponse;

  @SpeakeasyMetadata()
  transferConflictException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
