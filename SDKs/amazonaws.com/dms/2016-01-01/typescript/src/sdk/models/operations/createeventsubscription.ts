import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateEventSubscriptionXAmzTargetEnum {
    AmazonDmSv20160101CreateEventSubscription = "AmazonDMSv20160101.CreateEventSubscription"
}


export class CreateEventSubscriptionHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateEventSubscriptionXAmzTargetEnum;
}


export class CreateEventSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateEventSubscriptionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateEventSubscriptionMessage;
}


export class CreateEventSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createEventSubscriptionResponse?: shared.CreateEventSubscriptionResponse;

  @SpeakeasyMetadata()
  kmsAccessDeniedFault?: any;

  @SpeakeasyMetadata()
  kmsDisabledFault?: any;

  @SpeakeasyMetadata()
  kmsInvalidStateFault?: any;

  @SpeakeasyMetadata()
  kmsNotFoundFault?: any;

  @SpeakeasyMetadata()
  kmsThrottlingFault?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsFault?: any;

  @SpeakeasyMetadata()
  resourceNotFoundFault?: any;

  @SpeakeasyMetadata()
  resourceQuotaExceededFault?: any;

  @SpeakeasyMetadata()
  snsInvalidTopicFault?: any;

  @SpeakeasyMetadata()
  snsNoAuthorizationFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
