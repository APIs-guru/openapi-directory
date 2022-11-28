import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum EnableClientAuthenticationXAmzTargetEnum {
    DirectoryService20150416EnableClientAuthentication = "DirectoryService_20150416.EnableClientAuthentication"
}


export class EnableClientAuthenticationHeaders extends SpeakeasyBase {
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
  xAmzTarget: EnableClientAuthenticationXAmzTargetEnum;
}


export class EnableClientAuthenticationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: EnableClientAuthenticationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.EnableClientAuthenticationRequest;
}


export class EnableClientAuthenticationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directoryDoesNotExistException?: any;

  @SpeakeasyMetadata()
  enableClientAuthenticationResult?: Map<string, any>;

  @SpeakeasyMetadata()
  invalidClientAuthStatusException?: any;

  @SpeakeasyMetadata()
  noAvailableCertificateException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedOperationException?: any;
}
