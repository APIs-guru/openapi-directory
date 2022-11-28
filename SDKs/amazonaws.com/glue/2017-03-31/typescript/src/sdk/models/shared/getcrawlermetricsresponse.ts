import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CrawlerMetrics } from "./crawlermetrics";



export class GetCrawlerMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CrawlerMetricsList", elemType: CrawlerMetrics })
  crawlerMetricsList?: CrawlerMetrics[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
