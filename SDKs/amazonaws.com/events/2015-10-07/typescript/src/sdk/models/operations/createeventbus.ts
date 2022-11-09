import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateEventBusXAmzTargetEnum {
    AwsEventsCreateEventBus = "AWSEvents.CreateEventBus"
}


export class CreateEventBusHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateEventBusXAmzTargetEnum;
}


export class CreateEventBusRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateEventBusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateEventBusRequest;
}


export class CreateEventBusResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createEventBusResponse?: shared.CreateEventBusResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidStateException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  operationDisabledException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
