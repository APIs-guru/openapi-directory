import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CrawlerLineageSettingsEnum } from "./crawlerlineagesettingsenum";


// LineageConfiguration
/** 
 * Specifies data lineage configuration settings for the crawler.
**/
export class LineageConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=CrawlerLineageSettings" })
  crawlerLineageSettings?: CrawlerLineageSettingsEnum;
}
