import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DynamodbDataSourceConfig } from "./dynamodbdatasourceconfig";
import { ElasticsearchDataSourceConfig } from "./elasticsearchdatasourceconfig";
import { HttpDataSourceConfig } from "./httpdatasourceconfig";
import { LambdaDataSourceConfig } from "./lambdadatasourceconfig";
import { RelationalDatabaseDataSourceConfig } from "./relationaldatabasedatasourceconfig";
import { DataSourceTypeEnum } from "./datasourcetypeenum";
/**
 * Describes a data source.
**/
export declare class DataSource extends SpeakeasyBase {
    dataSourceArn?: string;
    description?: string;
    dynamodbConfig?: DynamodbDataSourceConfig;
    elasticsearchConfig?: ElasticsearchDataSourceConfig;
    httpConfig?: HttpDataSourceConfig;
    lambdaConfig?: LambdaDataSourceConfig;
    name?: string;
    relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;
    serviceRoleArn?: string;
    type?: DataSourceTypeEnum;
}
