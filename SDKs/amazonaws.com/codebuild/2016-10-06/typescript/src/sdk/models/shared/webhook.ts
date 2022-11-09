import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WebhookBuildTypeEnum } from "./webhookbuildtypeenum";
import { WebhookFilter } from "./webhookfilter";


// Webhook
/** 
 * Information about a webhook that connects repository events to a build project in CodeBuild.
**/
export class Webhook extends SpeakeasyBase {
  @Metadata({ data: "json, name=branchFilter" })
  branchFilter?: string;

  @Metadata({ data: "json, name=buildType" })
  buildType?: WebhookBuildTypeEnum;

  @Metadata({ data: "json, name=filterGroups", elemType: shared.WebhookFilter, elemDepth: 2 })
  filterGroups?: WebhookFilter[][];

  @Metadata({ data: "json, name=lastModifiedSecret" })
  lastModifiedSecret?: Date;

  @Metadata({ data: "json, name=payloadUrl" })
  payloadUrl?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
