import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Crawler } from "./crawler";



export class BatchGetCrawlersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Crawlers", elemType: Crawler })
  crawlers?: Crawler[];

  @SpeakeasyMetadata({ data: "json, name=CrawlersNotFound" })
  crawlersNotFound?: string[];
}
