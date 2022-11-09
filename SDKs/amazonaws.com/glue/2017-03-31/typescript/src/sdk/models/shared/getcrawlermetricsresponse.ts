import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CrawlerMetrics } from "./crawlermetrics";


export class GetCrawlerMetricsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CrawlerMetricsList", elemType: shared.CrawlerMetrics })
  crawlerMetricsList?: CrawlerMetrics[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
