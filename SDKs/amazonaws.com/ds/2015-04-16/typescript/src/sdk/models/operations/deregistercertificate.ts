import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeregisterCertificateXAmzTargetEnum {
    DirectoryService20150416DeregisterCertificate = "DirectoryService_20150416.DeregisterCertificate"
}


export class DeregisterCertificateHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DeregisterCertificateXAmzTargetEnum;
}


export class DeregisterCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeregisterCertificateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeregisterCertificateRequest;
}


export class DeregisterCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateDoesNotExistException?: any;

  @SpeakeasyMetadata()
  certificateInUseException?: any;

  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deregisterCertificateResult?: Map<string, any>;

  @SpeakeasyMetadata()
  directoryDoesNotExistException?: any;

  @SpeakeasyMetadata()
  directoryUnavailableException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedOperationException?: any;
}
