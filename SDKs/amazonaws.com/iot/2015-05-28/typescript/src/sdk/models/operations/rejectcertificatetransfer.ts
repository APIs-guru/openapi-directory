import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RejectCertificateTransferPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=certificateId" })
  certificateId: string;
}


export class RejectCertificateTransferHeaders extends SpeakeasyBase {
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


export class RejectCertificateTransferRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=rejectReason" })
  rejectReason?: string;
}


export class RejectCertificateTransferRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RejectCertificateTransferPathParams;

  @Metadata()
  headers: RejectCertificateTransferHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: RejectCertificateTransferRequestBody;
}


export class RejectCertificateTransferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  transferAlreadyCompletedException?: any;

  @Metadata()
  unauthorizedException?: any;
}
