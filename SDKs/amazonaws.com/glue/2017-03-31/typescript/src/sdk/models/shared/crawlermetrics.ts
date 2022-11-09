import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CrawlerMetrics
/** 
 * Metrics for a specified crawler.
**/
export class CrawlerMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=CrawlerName" })
  crawlerName?: string;

  @Metadata({ data: "json, name=LastRuntimeSeconds" })
  lastRuntimeSeconds?: number;

  @Metadata({ data: "json, name=MedianRuntimeSeconds" })
  medianRuntimeSeconds?: number;

  @Metadata({ data: "json, name=StillEstimating" })
  stillEstimating?: boolean;

  @Metadata({ data: "json, name=TablesCreated" })
  tablesCreated?: number;

  @Metadata({ data: "json, name=TablesDeleted" })
  tablesDeleted?: number;

  @Metadata({ data: "json, name=TablesUpdated" })
  tablesUpdated?: number;

  @Metadata({ data: "json, name=TimeLeftSeconds" })
  timeLeftSeconds?: number;
}
