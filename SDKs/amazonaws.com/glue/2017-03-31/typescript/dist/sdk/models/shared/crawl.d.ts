import { SpeakeasyBase } from "../../../internal/utils";
import { CrawlStateEnum } from "./crawlstateenum";
/**
 * The details of a crawl in the workflow.
**/
export declare class Crawl extends SpeakeasyBase {
    completedOn?: Date;
    errorMessage?: string;
    logGroup?: string;
    logStream?: string;
    startedOn?: Date;
    state?: CrawlStateEnum;
}
