import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ModifyEventSubscriptionXAmzTargetEnum {
    AmazonDmSv20160101ModifyEventSubscription = "AmazonDMSv20160101.ModifyEventSubscription"
}


export class ModifyEventSubscriptionHeaders extends SpeakeasyBase {
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
  xAmzTarget: ModifyEventSubscriptionXAmzTargetEnum;
}


export class ModifyEventSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  headers: ModifyEventSubscriptionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ModifyEventSubscriptionMessage;
}


export class ModifyEventSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

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
  modifyEventSubscriptionResponse?: shared.ModifyEventSubscriptionResponse;

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
