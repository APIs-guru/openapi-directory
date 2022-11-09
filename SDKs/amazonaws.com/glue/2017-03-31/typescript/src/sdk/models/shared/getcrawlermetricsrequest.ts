import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCrawlerMetricsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CrawlerNameList" })
  crawlerNameList?: string[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
