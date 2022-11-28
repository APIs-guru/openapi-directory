import { SpeakeasyBase } from "../../../internal/utils";
import { LineageConfiguration } from "./lineageconfiguration";
import { RecrawlPolicy } from "./recrawlpolicy";
import { SchemaChangePolicy } from "./schemachangepolicy";
import { CrawlerTargets } from "./crawlertargets";
export declare class CreateCrawlerRequest extends SpeakeasyBase {
    classifiers?: string[];
    configuration?: string;
    crawlerSecurityConfiguration?: string;
    databaseName?: string;
    description?: string;
    lineageConfiguration?: LineageConfiguration;
    name: string;
    recrawlPolicy?: RecrawlPolicy;
    role: string;
    schedule?: string;
    schemaChangePolicy?: SchemaChangePolicy;
    tablePrefix?: string;
    tags?: Map<string, string>;
    targets: CrawlerTargets;
}
