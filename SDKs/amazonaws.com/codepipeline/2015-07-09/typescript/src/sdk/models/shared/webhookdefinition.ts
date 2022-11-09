import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WebhookAuthenticationTypeEnum } from "./webhookauthenticationtypeenum";
import { WebhookAuthConfiguration } from "./webhookauthconfiguration";
import { WebhookFilterRule } from "./webhookfilterrule";


// WebhookDefinition
/** 
 * Represents information about a webhook and its definition.
**/
export class WebhookDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=authentication" })
  authentication: WebhookAuthenticationTypeEnum;

  @Metadata({ data: "json, name=authenticationConfiguration" })
  authenticationConfiguration: WebhookAuthConfiguration;

  @Metadata({ data: "json, name=filters", elemType: shared.WebhookFilterRule })
  filters: WebhookFilterRule[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=targetAction" })
  targetAction: string;

  @Metadata({ data: "json, name=targetPipeline" })
  targetPipeline: string;
}
