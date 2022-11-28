import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LineageConfiguration } from "./lineageconfiguration";
import { RecrawlPolicy } from "./recrawlpolicy";
import { SchemaChangePolicy } from "./schemachangepolicy";
import { CrawlerTargets } from "./crawlertargets";



export class CreateCrawlerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Classifiers" })
  classifiers?: string[];

  @SpeakeasyMetadata({ data: "json, name=Configuration" })
  configuration?: string;

  @SpeakeasyMetadata({ data: "json, name=CrawlerSecurityConfiguration" })
  crawlerSecurityConfiguration?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=LineageConfiguration" })
  lineageConfiguration?: LineageConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=RecrawlPolicy" })
  recrawlPolicy?: RecrawlPolicy;

  @SpeakeasyMetadata({ data: "json, name=Role" })
  role: string;

  @SpeakeasyMetadata({ data: "json, name=Schedule" })
  schedule?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaChangePolicy" })
  schemaChangePolicy?: SchemaChangePolicy;

  @SpeakeasyMetadata({ data: "json, name=TablePrefix" })
  tablePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Targets" })
  targets: CrawlerTargets;
}
