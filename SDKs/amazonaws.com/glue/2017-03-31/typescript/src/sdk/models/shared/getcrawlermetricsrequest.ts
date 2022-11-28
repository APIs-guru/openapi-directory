import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCrawlerMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CrawlerNameList" })
  crawlerNameList?: string[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
