import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ModifyEventSubscriptionXAmzTargetEnum {
    AmazonDmSv20160101ModifyEventSubscription = "AmazonDMSv20160101.ModifyEventSubscription"
}


export class ModifyEventSubscriptionHeaders extends SpeakeasyBase {
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
  xAmzTarget: ModifyEventSubscriptionXAmzTargetEnum;
}


export class ModifyEventSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ModifyEventSubscriptionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ModifyEventSubscriptionMessage;
}


export class ModifyEventSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

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
  modifyEventSubscriptionResponse?: shared.ModifyEventSubscriptionResponse;

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
