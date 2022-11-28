import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CrawlerLineageSettingsEnum } from "./crawlerlineagesettingsenum";



// LineageConfiguration
/** 
 * Specifies data lineage configuration settings for the crawler.
**/
export class LineageConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CrawlerLineageSettings" })
  crawlerLineageSettings?: CrawlerLineageSettingsEnum;
}
