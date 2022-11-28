import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebhookBuildTypeEnum } from "./webhookbuildtypeenum";
import { WebhookFilter } from "./webhookfilter";



export class CreateWebhookInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branchFilter" })
  branchFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=buildType" })
  buildType?: WebhookBuildTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=filterGroups", elemType: WebhookFilter, elemDepth: 2 })
  filterGroups?: WebhookFilter[][];

  @SpeakeasyMetadata({ data: "json, name=projectName" })
  projectName: string;
}
