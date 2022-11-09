import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TransferCertificatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=certificateId" })
  certificateId: string;
}


export class TransferCertificateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=targetAwsAccount" })
  targetAwsAccount: string;
}


export class TransferCertificateHeaders extends SpeakeasyBase {
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


export class TransferCertificateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=transferMessage" })
  transferMessage?: string;
}


export class TransferCertificateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TransferCertificatePathParams;

  @Metadata()
  queryParams: TransferCertificateQueryParams;

  @Metadata()
  headers: TransferCertificateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: TransferCertificateRequestBody;
}


export class TransferCertificateResponse extends SpeakeasyBase {
  @Metadata()
  certificateStateException?: any;

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
  transferCertificateResponse?: shared.TransferCertificateResponse;

  @Metadata()
  transferConflictException?: any;

  @Metadata()
  unauthorizedException?: any;
}
