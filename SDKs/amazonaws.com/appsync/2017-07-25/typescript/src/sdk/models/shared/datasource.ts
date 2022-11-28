import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DynamodbDataSourceConfig } from "./dynamodbdatasourceconfig";
import { ElasticsearchDataSourceConfig } from "./elasticsearchdatasourceconfig";
import { HttpDataSourceConfig } from "./httpdatasourceconfig";
import { LambdaDataSourceConfig } from "./lambdadatasourceconfig";
import { RelationalDatabaseDataSourceConfig } from "./relationaldatabasedatasourceconfig";
import { DataSourceTypeEnum } from "./datasourcetypeenum";



// DataSource
/** 
 * Describes a data source.
**/
export class DataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceArn" })
  dataSourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dynamodbConfig" })
  dynamodbConfig?: DynamodbDataSourceConfig;

  @SpeakeasyMetadata({ data: "json, name=elasticsearchConfig" })
  elasticsearchConfig?: ElasticsearchDataSourceConfig;

  @SpeakeasyMetadata({ data: "json, name=httpConfig" })
  httpConfig?: HttpDataSourceConfig;

  @SpeakeasyMetadata({ data: "json, name=lambdaConfig" })
  lambdaConfig?: LambdaDataSourceConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseConfig" })
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;

  @SpeakeasyMetadata({ data: "json, name=serviceRoleArn" })
  serviceRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DataSourceTypeEnum;
}
