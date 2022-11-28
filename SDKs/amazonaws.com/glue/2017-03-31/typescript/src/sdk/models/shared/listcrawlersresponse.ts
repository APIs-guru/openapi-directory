import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListCrawlersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CrawlerNames" })
  crawlerNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
