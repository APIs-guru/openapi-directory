import { SpeakeasyBase } from "../../../internal/utils";
import { CrawlerNodeDetails } from "./crawlernodedetails";
import { JobNodeDetails } from "./jobnodedetails";
import { TriggerNodeDetails } from "./triggernodedetails";
import { NodeTypeEnum } from "./nodetypeenum";
/**
 * A node represents an Glue component (trigger, crawler, or job) on a workflow graph.
**/
export declare class Node extends SpeakeasyBase {
    crawlerDetails?: CrawlerNodeDetails;
    jobDetails?: JobNodeDetails;
    name?: string;
    triggerDetails?: TriggerNodeDetails;
    type?: NodeTypeEnum;
    uniqueId?: string;
}
