import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchGetCrawlersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CrawlerNames" })
  crawlerNames: string[];
}
