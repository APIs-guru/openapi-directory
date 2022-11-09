import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Crawl } from "./crawl";


// CrawlerNodeDetails
/** 
 * The details of a Crawler node present in the workflow.
**/
export class CrawlerNodeDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Crawls", elemType: shared.Crawl })
  crawls?: Crawl[];
}
