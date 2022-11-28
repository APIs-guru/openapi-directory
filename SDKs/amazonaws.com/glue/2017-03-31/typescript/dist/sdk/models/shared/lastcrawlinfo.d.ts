import { SpeakeasyBase } from "../../../internal/utils";
import { LastCrawlStatusEnum } from "./lastcrawlstatusenum";
/**
 * Status and error information about the most recent crawl.
**/
export declare class LastCrawlInfo extends SpeakeasyBase {
    errorMessage?: string;
    logGroup?: string;
    logStream?: string;
    messagePrefix?: string;
    startTime?: Date;
    status?: LastCrawlStatusEnum;
}
