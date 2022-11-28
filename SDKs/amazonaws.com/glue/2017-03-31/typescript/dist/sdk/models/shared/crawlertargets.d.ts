import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogTarget } from "./catalogtarget";
import { DynamoDbTarget } from "./dynamodbtarget";
import { JdbcTarget } from "./jdbctarget";
import { MongoDbTarget } from "./mongodbtarget";
import { S3Target } from "./s3target";
/**
 * Specifies data stores to crawl.
**/
export declare class CrawlerTargets extends SpeakeasyBase {
    catalogTargets?: CatalogTarget[];
    dynamoDbTargets?: DynamoDbTarget[];
    jdbcTargets?: JdbcTarget[];
    mongoDbTargets?: MongoDbTarget[];
    s3Targets?: S3Target[];
}
