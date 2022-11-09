import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateEventSubscriptionXAmzTargetEnum {
    AmazonDmSv20160101CreateEventSubscription = "AmazonDMSv20160101.CreateEventSubscription"
}


export class CreateEventSubscriptionHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateEventSubscriptionXAmzTargetEnum;
}


export class CreateEventSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateEventSubscriptionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateEventSubscriptionMessage;
}


export class CreateEventSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createEventSubscriptionResponse?: shared.CreateEventSubscriptionResponse;

  @Metadata()
  kmsAccessDeniedFault?: any;

  @Metadata()
  kmsDisabledFault?: any;

  @Metadata()
  kmsInvalidStateFault?: any;

  @Metadata()
  kmsNotFoundFault?: any;

  @Metadata()
  kmsThrottlingFault?: any;

  @Metadata()
  resourceAlreadyExistsFault?: any;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  resourceQuotaExceededFault?: any;

  @Metadata()
  snsInvalidTopicFault?: any;

  @Metadata()
  snsNoAuthorizationFault?: any;

  @Metadata()
  statusCode: number;
}
