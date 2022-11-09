import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RequestCertificateXAmzTargetEnum {
    CertificateManagerRequestCertificate = "CertificateManager.RequestCertificate"
}


export class RequestCertificateHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: RequestCertificateXAmzTargetEnum;
}


export class RequestCertificateRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestCertificateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RequestCertificateRequest;
}


export class RequestCertificateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  invalidDomainValidationOptionsException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidTagException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  requestCertificateResponse?: shared.RequestCertificateResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagPolicyException?: any;

  @Metadata()
  tooManyTagsException?: any;
}
