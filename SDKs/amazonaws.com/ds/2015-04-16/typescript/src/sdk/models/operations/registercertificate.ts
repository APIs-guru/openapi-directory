import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RegisterCertificateXAmzTargetEnum {
    DirectoryService20150416RegisterCertificate = "DirectoryService_20150416.RegisterCertificate"
}


export class RegisterCertificateHeaders extends SpeakeasyBase {
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
  xAmzTarget: RegisterCertificateXAmzTargetEnum;
}


export class RegisterCertificateRequest extends SpeakeasyBase {
  @Metadata()
  headers: RegisterCertificateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RegisterCertificateRequest;
}


export class RegisterCertificateResponse extends SpeakeasyBase {
  @Metadata()
  certificateAlreadyExistsException?: any;

  @Metadata()
  certificateLimitExceededException?: any;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  directoryDoesNotExistException?: any;

  @Metadata()
  directoryUnavailableException?: any;

  @Metadata()
  invalidCertificateException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  registerCertificateResult?: shared.RegisterCertificateResult;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;
}
