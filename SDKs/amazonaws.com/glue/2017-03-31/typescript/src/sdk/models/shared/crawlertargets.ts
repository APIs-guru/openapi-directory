import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CatalogTarget } from "./catalogtarget";
import { DynamoDbTarget } from "./dynamodbtarget";
import { JdbcTarget } from "./jdbctarget";
import { MongoDbTarget } from "./mongodbtarget";
import { S3Target } from "./s3target";


// CrawlerTargets
/** 
 * Specifies data stores to crawl.
**/
export class CrawlerTargets extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogTargets", elemType: shared.CatalogTarget })
  catalogTargets?: CatalogTarget[];

  @Metadata({ data: "json, name=DynamoDBTargets", elemType: shared.DynamoDbTarget })
  dynamoDbTargets?: DynamoDbTarget[];

  @Metadata({ data: "json, name=JdbcTargets", elemType: shared.JdbcTarget })
  jdbcTargets?: JdbcTarget[];

  @Metadata({ data: "json, name=MongoDBTargets", elemType: shared.MongoDbTarget })
  mongoDbTargets?: MongoDbTarget[];

  @Metadata({ data: "json, name=S3Targets", elemType: shared.S3Target })
  s3Targets?: S3Target[];
}
