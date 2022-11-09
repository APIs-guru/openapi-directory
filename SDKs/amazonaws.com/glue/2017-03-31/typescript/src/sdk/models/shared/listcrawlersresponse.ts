import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListCrawlersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CrawlerNames" })
  crawlerNames?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
