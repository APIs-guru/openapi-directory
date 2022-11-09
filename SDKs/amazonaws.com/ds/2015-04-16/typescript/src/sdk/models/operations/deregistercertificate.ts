import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeregisterCertificateXAmzTargetEnum {
    DirectoryService20150416DeregisterCertificate = "DirectoryService_20150416.DeregisterCertificate"
}


export class DeregisterCertificateHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeregisterCertificateXAmzTargetEnum;
}


export class DeregisterCertificateRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeregisterCertificateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeregisterCertificateRequest;
}


export class DeregisterCertificateResponse extends SpeakeasyBase {
  @Metadata()
  certificateDoesNotExistException?: any;

  @Metadata()
  certificateInUseException?: any;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deregisterCertificateResult?: Map<string, any>;

  @Metadata()
  directoryDoesNotExistException?: any;

  @Metadata()
  directoryUnavailableException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;
}
