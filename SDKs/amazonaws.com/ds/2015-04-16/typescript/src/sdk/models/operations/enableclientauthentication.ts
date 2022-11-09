import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum EnableClientAuthenticationXAmzTargetEnum {
    DirectoryService20150416EnableClientAuthentication = "DirectoryService_20150416.EnableClientAuthentication"
}


export class EnableClientAuthenticationHeaders extends SpeakeasyBase {
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
  xAmzTarget: EnableClientAuthenticationXAmzTargetEnum;
}


export class EnableClientAuthenticationRequest extends SpeakeasyBase {
  @Metadata()
  headers: EnableClientAuthenticationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.EnableClientAuthenticationRequest;
}


export class EnableClientAuthenticationResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  directoryDoesNotExistException?: any;

  @Metadata()
  enableClientAuthenticationResult?: Map<string, any>;

  @Metadata()
  invalidClientAuthStatusException?: any;

  @Metadata()
  noAvailableCertificateException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;
}
