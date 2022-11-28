import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Crawl } from "./crawl";



// CrawlerNodeDetails
/** 
 * The details of a Crawler node present in the workflow.
**/
export class CrawlerNodeDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Crawls", elemType: Crawl })
  crawls?: Crawl[];
}
