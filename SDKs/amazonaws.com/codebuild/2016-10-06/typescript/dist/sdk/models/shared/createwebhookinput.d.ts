import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookBuildTypeEnum } from "./webhookbuildtypeenum";
import { WebhookFilter } from "./webhookfilter";
export declare class CreateWebhookInput extends SpeakeasyBase {
    branchFilter?: string;
    buildType?: WebhookBuildTypeEnum;
    filterGroups?: WebhookFilter[][];
    projectName: string;
}
