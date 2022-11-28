import { SpeakeasyBase } from "../../../internal/utils";
import { CrawlStateEnum } from "./crawlstateenum";
import { LogicalOperatorEnum } from "./logicaloperatorenum";
import { JobRunStateEnum } from "./jobrunstateenum";
/**
 * Defines a condition under which a trigger fires.
**/
export declare class Condition extends SpeakeasyBase {
    crawlState?: CrawlStateEnum;
    crawlerName?: string;
    jobName?: string;
    logicalOperator?: LogicalOperatorEnum;
    state?: JobRunStateEnum;
}
