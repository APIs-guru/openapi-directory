import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CrawlerMetrics
/** 
 * Metrics for a specified crawler.
**/
export class CrawlerMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CrawlerName" })
  crawlerName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastRuntimeSeconds" })
  lastRuntimeSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=MedianRuntimeSeconds" })
  medianRuntimeSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=StillEstimating" })
  stillEstimating?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TablesCreated" })
  tablesCreated?: number;

  @SpeakeasyMetadata({ data: "json, name=TablesDeleted" })
  tablesDeleted?: number;

  @SpeakeasyMetadata({ data: "json, name=TablesUpdated" })
  tablesUpdated?: number;

  @SpeakeasyMetadata({ data: "json, name=TimeLeftSeconds" })
  timeLeftSeconds?: number;
}
