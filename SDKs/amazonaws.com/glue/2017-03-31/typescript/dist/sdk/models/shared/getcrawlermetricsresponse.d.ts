import { SpeakeasyBase } from "../../../internal/utils";
import { CrawlerMetrics } from "./crawlermetrics";
export declare class GetCrawlerMetricsResponse extends SpeakeasyBase {
    crawlerMetricsList?: CrawlerMetrics[];
    nextToken?: string;
}
