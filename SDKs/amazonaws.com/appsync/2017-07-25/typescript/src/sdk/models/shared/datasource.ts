import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=dataSourceArn" })
  dataSourceArn?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=dynamodbConfig" })
  dynamodbConfig?: DynamodbDataSourceConfig;

  @Metadata({ data: "json, name=elasticsearchConfig" })
  elasticsearchConfig?: ElasticsearchDataSourceConfig;

  @Metadata({ data: "json, name=httpConfig" })
  httpConfig?: HttpDataSourceConfig;

  @Metadata({ data: "json, name=lambdaConfig" })
  lambdaConfig?: LambdaDataSourceConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=relationalDatabaseConfig" })
  relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;

  @Metadata({ data: "json, name=serviceRoleArn" })
  serviceRoleArn?: string;

  @Metadata({ data: "json, name=type" })
  type?: DataSourceTypeEnum;
}
