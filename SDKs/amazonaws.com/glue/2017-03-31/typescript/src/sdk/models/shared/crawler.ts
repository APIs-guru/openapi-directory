import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LastCrawlInfo } from "./lastcrawlinfo";
import { LineageConfiguration } from "./lineageconfiguration";
import { RecrawlPolicy } from "./recrawlpolicy";
import { Schedule } from "./schedule";
import { SchemaChangePolicy } from "./schemachangepolicy";
import { CrawlerStateEnum } from "./crawlerstateenum";
import { CrawlerTargets } from "./crawlertargets";



// Crawler
/** 
 * Specifies a crawler program that examines a data source and uses classifiers to try to determine its schema. If successful, the crawler records metadata concerning the data source in the Glue Data Catalog.
**/
export class Crawler extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Classifiers" })
  classifiers?: string[];

  @SpeakeasyMetadata({ data: "json, name=Configuration" })
  configuration?: string;

  @SpeakeasyMetadata({ data: "json, name=CrawlElapsedTime" })
  crawlElapsedTime?: number;

  @SpeakeasyMetadata({ data: "json, name=CrawlerSecurityConfiguration" })
  crawlerSecurityConfiguration?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=LastCrawl" })
  lastCrawl?: LastCrawlInfo;

  @SpeakeasyMetadata({ data: "json, name=LastUpdated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=LineageConfiguration" })
  lineageConfiguration?: LineageConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=RecrawlPolicy" })
  recrawlPolicy?: RecrawlPolicy;

  @SpeakeasyMetadata({ data: "json, name=Role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=Schedule" })
  schedule?: Schedule;

  @SpeakeasyMetadata({ data: "json, name=SchemaChangePolicy" })
  schemaChangePolicy?: SchemaChangePolicy;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: CrawlerStateEnum;

  @SpeakeasyMetadata({ data: "json, name=TablePrefix" })
  tablePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=Targets" })
  targets?: CrawlerTargets;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;
}
