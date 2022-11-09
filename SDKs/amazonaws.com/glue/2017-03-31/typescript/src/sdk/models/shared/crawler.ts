import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=Classifiers" })
  classifiers?: string[];

  @Metadata({ data: "json, name=Configuration" })
  configuration?: string;

  @Metadata({ data: "json, name=CrawlElapsedTime" })
  crawlElapsedTime?: number;

  @Metadata({ data: "json, name=CrawlerSecurityConfiguration" })
  crawlerSecurityConfiguration?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=LastCrawl" })
  lastCrawl?: LastCrawlInfo;

  @Metadata({ data: "json, name=LastUpdated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=LineageConfiguration" })
  lineageConfiguration?: LineageConfiguration;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=RecrawlPolicy" })
  recrawlPolicy?: RecrawlPolicy;

  @Metadata({ data: "json, name=Role" })
  role?: string;

  @Metadata({ data: "json, name=Schedule" })
  schedule?: Schedule;

  @Metadata({ data: "json, name=SchemaChangePolicy" })
  schemaChangePolicy?: SchemaChangePolicy;

  @Metadata({ data: "json, name=State" })
  state?: CrawlerStateEnum;

  @Metadata({ data: "json, name=TablePrefix" })
  tablePrefix?: string;

  @Metadata({ data: "json, name=Targets" })
  targets?: CrawlerTargets;

  @Metadata({ data: "json, name=Version" })
  version?: number;
}
