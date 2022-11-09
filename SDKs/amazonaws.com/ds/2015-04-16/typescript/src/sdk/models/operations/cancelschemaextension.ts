import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CancelSchemaExtensionXAmzTargetEnum {
    DirectoryService20150416CancelSchemaExtension = "DirectoryService_20150416.CancelSchemaExtension"
}


export class CancelSchemaExtensionHeaders extends SpeakeasyBase {
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
  xAmzTarget: CancelSchemaExtensionXAmzTargetEnum;
}


export class CancelSchemaExtensionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CancelSchemaExtensionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CancelSchemaExtensionRequest;
}


export class CancelSchemaExtensionResponse extends SpeakeasyBase {
  @Metadata()
  cancelSchemaExtensionResult?: Map<string, any>;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  entityDoesNotExistException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;
}
