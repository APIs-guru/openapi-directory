import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CrawlerNodeDetails } from "./crawlernodedetails";
import { JobNodeDetails } from "./jobnodedetails";
import { TriggerNodeDetails } from "./triggernodedetails";
import { NodeTypeEnum } from "./nodetypeenum";



// Node
/** 
 * A node represents an Glue component (trigger, crawler, or job) on a workflow graph.
**/
export class Node extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CrawlerDetails" })
  crawlerDetails?: CrawlerNodeDetails;

  @SpeakeasyMetadata({ data: "json, name=JobDetails" })
  jobDetails?: JobNodeDetails;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=TriggerDetails" })
  triggerDetails?: TriggerNodeDetails;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: NodeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=UniqueId" })
  uniqueId?: string;
}
