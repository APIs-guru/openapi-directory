import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CrawlStateEnum } from "./crawlstateenum";
import { LogicalOperatorEnum } from "./logicaloperatorenum";
import { JobRunStateEnum } from "./jobrunstateenum";


// Condition
/** 
 * Defines a condition under which a trigger fires.
**/
export class Condition extends SpeakeasyBase {
  @Metadata({ data: "json, name=CrawlState" })
  crawlState?: CrawlStateEnum;

  @Metadata({ data: "json, name=CrawlerName" })
  crawlerName?: string;

  @Metadata({ data: "json, name=JobName" })
  jobName?: string;

  @Metadata({ data: "json, name=LogicalOperator" })
  logicalOperator?: LogicalOperatorEnum;

  @Metadata({ data: "json, name=State" })
  state?: JobRunStateEnum;
}
