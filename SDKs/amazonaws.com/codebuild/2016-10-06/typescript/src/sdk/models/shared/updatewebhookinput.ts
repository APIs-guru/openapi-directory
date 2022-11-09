import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WebhookBuildTypeEnum } from "./webhookbuildtypeenum";
import { WebhookFilter } from "./webhookfilter";


export class UpdateWebhookInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=branchFilter" })
  branchFilter?: string;

  @Metadata({ data: "json, name=buildType" })
  buildType?: WebhookBuildTypeEnum;

  @Metadata({ data: "json, name=filterGroups", elemType: shared.WebhookFilter, elemDepth: 2 })
  filterGroups?: WebhookFilter[][];

  @Metadata({ data: "json, name=projectName" })
  projectName: string;

  @Metadata({ data: "json, name=rotateSecret" })
  rotateSecret?: boolean;
}
