import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookBuildTypeEnum } from "./webhookbuildtypeenum";
import { WebhookFilter } from "./webhookfilter";
/**
 * Information about a webhook that connects repository events to a build project in CodeBuild.
**/
export declare class Webhook extends SpeakeasyBase {
    branchFilter?: string;
    buildType?: WebhookBuildTypeEnum;
    filterGroups?: WebhookFilter[][];
    lastModifiedSecret?: Date;
    payloadUrl?: string;
    secret?: string;
    url?: string;
}
