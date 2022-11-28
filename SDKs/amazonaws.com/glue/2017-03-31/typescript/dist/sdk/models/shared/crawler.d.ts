import { SpeakeasyBase } from "../../../internal/utils";
import { LastCrawlInfo } from "./lastcrawlinfo";
import { LineageConfiguration } from "./lineageconfiguration";
import { RecrawlPolicy } from "./recrawlpolicy";
import { Schedule } from "./schedule";
import { SchemaChangePolicy } from "./schemachangepolicy";
import { CrawlerStateEnum } from "./crawlerstateenum";
import { CrawlerTargets } from "./crawlertargets";
/**
 * Specifies a crawler program that examines a data source and uses classifiers to try to determine its schema. If successful, the crawler records metadata concerning the data source in the Glue Data Catalog.
**/
export declare class Crawler extends SpeakeasyBase {
    classifiers?: string[];
    configuration?: string;
    crawlElapsedTime?: number;
    crawlerSecurityConfiguration?: string;
    creationTime?: Date;
    databaseName?: string;
    description?: string;
    lastCrawl?: LastCrawlInfo;
    lastUpdated?: Date;
    lineageConfiguration?: LineageConfiguration;
    name?: string;
    recrawlPolicy?: RecrawlPolicy;
    role?: string;
    schedule?: Schedule;
    schemaChangePolicy?: SchemaChangePolicy;
    state?: CrawlerStateEnum;
    tablePrefix?: string;
    targets?: CrawlerTargets;
    version?: number;
}
