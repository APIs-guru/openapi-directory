import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateConditionalForwarderXAmzTargetEnum {
    DirectoryService20150416CreateConditionalForwarder = "DirectoryService_20150416.CreateConditionalForwarder"
}


export class CreateConditionalForwarderHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateConditionalForwarderXAmzTargetEnum;
}


export class CreateConditionalForwarderRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateConditionalForwarderHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateConditionalForwarderRequest;
}


export class CreateConditionalForwarderResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createConditionalForwarderResult?: Map<string, any>;

  @Metadata()
  directoryUnavailableException?: any;

  @Metadata()
  entityAlreadyExistsException?: any;

  @Metadata()
  entityDoesNotExistException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;
}
