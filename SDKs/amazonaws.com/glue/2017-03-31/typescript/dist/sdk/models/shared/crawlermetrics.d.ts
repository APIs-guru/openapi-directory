import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metrics for a specified crawler.
**/
export declare class CrawlerMetrics extends SpeakeasyBase {
    crawlerName?: string;
    lastRuntimeSeconds?: number;
    medianRuntimeSeconds?: number;
    stillEstimating?: boolean;
    tablesCreated?: number;
    tablesDeleted?: number;
    tablesUpdated?: number;
    timeLeftSeconds?: number;
}
