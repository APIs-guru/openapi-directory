import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCertificateFromCsrQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=setAsActive" })
  setAsActive?: boolean;
}


export class CreateCertificateFromCsrHeaders extends SpeakeasyBase {
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


export class CreateCertificateFromCsrRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateSigningRequest" })
  certificateSigningRequest: string;
}


export class CreateCertificateFromCsrRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateCertificateFromCsrQueryParams;

  @Metadata()
  headers: CreateCertificateFromCsrHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateCertificateFromCsrRequestBody;
}


export class CreateCertificateFromCsrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createCertificateFromCsrResponse?: shared.CreateCertificateFromCsrResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  unauthorizedException?: any;
}
