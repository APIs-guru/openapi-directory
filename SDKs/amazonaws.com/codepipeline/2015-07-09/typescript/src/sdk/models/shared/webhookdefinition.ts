import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebhookAuthenticationTypeEnum } from "./webhookauthenticationtypeenum";
import { WebhookAuthConfiguration } from "./webhookauthconfiguration";
import { WebhookFilterRule } from "./webhookfilterrule";



// WebhookDefinition
/** 
 * Represents information about a webhook and its definition.
**/
export class WebhookDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authentication" })
  authentication: WebhookAuthenticationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=authenticationConfiguration" })
  authenticationConfiguration: WebhookAuthConfiguration;

  @SpeakeasyMetadata({ data: "json, name=filters", elemType: WebhookFilterRule })
  filters: WebhookFilterRule[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=targetAction" })
  targetAction: string;

  @SpeakeasyMetadata({ data: "json, name=targetPipeline" })
  targetPipeline: string;
}
