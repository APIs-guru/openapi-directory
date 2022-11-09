import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateLogSubscriptionXAmzTargetEnum {
    DirectoryService20150416CreateLogSubscription = "DirectoryService_20150416.CreateLogSubscription"
}


export class CreateLogSubscriptionHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateLogSubscriptionXAmzTargetEnum;
}


export class CreateLogSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateLogSubscriptionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateLogSubscriptionRequest;
}


export class CreateLogSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createLogSubscriptionResult?: Map<string, any>;

  @Metadata()
  entityAlreadyExistsException?: any;

  @Metadata()
  entityDoesNotExistException?: any;

  @Metadata()
  insufficientPermissionsException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperationException?: any;
}
