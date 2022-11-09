import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Crawler } from "./crawler";


export class BatchGetCrawlersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Crawlers", elemType: shared.Crawler })
  crawlers?: Crawler[];

  @Metadata({ data: "json, name=CrawlersNotFound" })
  crawlersNotFound?: string[];
}
