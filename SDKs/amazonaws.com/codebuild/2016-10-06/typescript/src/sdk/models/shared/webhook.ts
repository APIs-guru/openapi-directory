import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebhookBuildTypeEnum } from "./webhookbuildtypeenum";
import { WebhookFilter } from "./webhookfilter";



// Webhook
/** 
 * Information about a webhook that connects repository events to a build project in CodeBuild.
**/
export class Webhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branchFilter" })
  branchFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=buildType" })
  buildType?: WebhookBuildTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=filterGroups", elemType: WebhookFilter, elemDepth: 2 })
  filterGroups?: WebhookFilter[][];

  @SpeakeasyMetadata({ data: "json, name=lastModifiedSecret" })
  lastModifiedSecret?: Date;

  @SpeakeasyMetadata({ data: "json, name=payloadUrl" })
  payloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
