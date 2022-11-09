import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartSchemaExtensionXAmzTargetEnum {
    DirectoryService20150416StartSchemaExtension = "DirectoryService_20150416.StartSchemaExtension"
}


export class StartSchemaExtensionHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartSchemaExtensionXAmzTargetEnum;
}


export class StartSchemaExtensionRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartSchemaExtensionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartSchemaExtensionRequest;
}


export class StartSchemaExtensionResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  directoryUnavailableException?: any;

  @Metadata()
  entityDoesNotExistException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  snapshotLimitExceededException?: any;

  @Metadata()
  startSchemaExtensionResult?: shared.StartSchemaExtensionResult;

  @Metadata()
  statusCode: number;
}
