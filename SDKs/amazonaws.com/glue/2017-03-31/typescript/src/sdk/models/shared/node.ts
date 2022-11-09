import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CrawlerNodeDetails } from "./crawlernodedetails";
import { JobNodeDetails } from "./jobnodedetails";
import { TriggerNodeDetails } from "./triggernodedetails";
import { NodeTypeEnum } from "./nodetypeenum";


// Node
/** 
 * A node represents an Glue component (trigger, crawler, or job) on a workflow graph.
**/
export class Node extends SpeakeasyBase {
  @Metadata({ data: "json, name=CrawlerDetails" })
  crawlerDetails?: CrawlerNodeDetails;

  @Metadata({ data: "json, name=JobDetails" })
  jobDetails?: JobNodeDetails;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=TriggerDetails" })
  triggerDetails?: TriggerNodeDetails;

  @Metadata({ data: "json, name=Type" })
  type?: NodeTypeEnum;

  @Metadata({ data: "json, name=UniqueId" })
  uniqueId?: string;
}
