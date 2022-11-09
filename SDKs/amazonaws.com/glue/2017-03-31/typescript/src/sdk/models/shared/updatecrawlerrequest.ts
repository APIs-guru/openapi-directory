import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LineageConfiguration } from "./lineageconfiguration";
import { RecrawlPolicy } from "./recrawlpolicy";
import { SchemaChangePolicy } from "./schemachangepolicy";
import { CrawlerTargets } from "./crawlertargets";


export class UpdateCrawlerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Classifiers" })
  classifiers?: string[];

  @Metadata({ data: "json, name=Configuration" })
  configuration?: string;

  @Metadata({ data: "json, name=CrawlerSecurityConfiguration" })
  crawlerSecurityConfiguration?: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=LineageConfiguration" })
  lineageConfiguration?: LineageConfiguration;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=RecrawlPolicy" })
  recrawlPolicy?: RecrawlPolicy;

  @Metadata({ data: "json, name=Role" })
  role?: string;

  @Metadata({ data: "json, name=Schedule" })
  schedule?: string;

  @Metadata({ data: "json, name=SchemaChangePolicy" })
  schemaChangePolicy?: SchemaChangePolicy;

  @Metadata({ data: "json, name=TablePrefix" })
  tablePrefix?: string;

  @Metadata({ data: "json, name=Targets" })
  targets?: CrawlerTargets;
}
