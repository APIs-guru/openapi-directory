import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CrawlStateEnum } from "./crawlstateenum";
import { LogicalOperatorEnum } from "./logicaloperatorenum";
import { JobRunStateEnum } from "./jobrunstateenum";



// Condition
/** 
 * Defines a condition under which a trigger fires.
**/
export class Condition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CrawlState" })
  crawlState?: CrawlStateEnum;

  @SpeakeasyMetadata({ data: "json, name=CrawlerName" })
  crawlerName?: string;

  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=LogicalOperator" })
  logicalOperator?: LogicalOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: JobRunStateEnum;
}
