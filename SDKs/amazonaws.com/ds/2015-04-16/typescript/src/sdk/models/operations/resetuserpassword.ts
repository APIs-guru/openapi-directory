import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ResetUserPasswordXAmzTargetEnum {
    DirectoryService20150416ResetUserPassword = "DirectoryService_20150416.ResetUserPassword"
}


export class ResetUserPasswordHeaders extends SpeakeasyBase {
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
  xAmzTarget: ResetUserPasswordXAmzTargetEnum;
}


export class ResetUserPasswordRequest extends SpeakeasyBase {
  @Metadata()
  headers: ResetUserPasswordHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ResetUserPasswordRequest;
}


export class ResetUserPasswordResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  directoryUnavailableException?: any;

  @Metadata()
  entityDoesNotExistException?: any;

  @Metadata()
  invalidPasswordException?: any;

  @Metadata()
  resetUserPasswordResult?: Map<string, any>;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;

  @Metadata()
  userDoesNotExistException?: any;
}
