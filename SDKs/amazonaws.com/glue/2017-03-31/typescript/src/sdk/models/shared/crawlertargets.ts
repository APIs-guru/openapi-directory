import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=CatalogTargets", elemType: CatalogTarget })
  catalogTargets?: CatalogTarget[];

  @SpeakeasyMetadata({ data: "json, name=DynamoDBTargets", elemType: DynamoDbTarget })
  dynamoDbTargets?: DynamoDbTarget[];

  @SpeakeasyMetadata({ data: "json, name=JdbcTargets", elemType: JdbcTarget })
  jdbcTargets?: JdbcTarget[];

  @SpeakeasyMetadata({ data: "json, name=MongoDBTargets", elemType: MongoDbTarget })
  mongoDbTargets?: MongoDbTarget[];

  @SpeakeasyMetadata({ data: "json, name=S3Targets", elemType: S3Target })
  s3Targets?: S3Target[];
}
