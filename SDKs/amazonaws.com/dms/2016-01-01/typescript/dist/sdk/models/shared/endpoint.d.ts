import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DmsTransferSettings } from "./dmstransfersettings";
import { DocDbSettings } from "./docdbsettings";
import { DynamoDbSettings } from "./dynamodbsettings";
import { ElasticsearchSettings } from "./elasticsearchsettings";
import { ReplicationEndpointTypeValueEnum } from "./replicationendpointtypevalueenum";
import { IbmDb2Settings } from "./ibmdb2settings";
import { KafkaSettings } from "./kafkasettings";
import { KinesisSettings } from "./kinesissettings";
import { MicrosoftSqlServerSettings } from "./microsoftsqlserversettings";
import { MongoDbSettings } from "./mongodbsettings";
import { MySqlSettings } from "./mysqlsettings";
import { NeptuneSettings } from "./neptunesettings";
import { OracleSettings } from "./oraclesettings";
import { PostgreSqlSettings } from "./postgresqlsettings";
import { RedisSettings } from "./redissettings";
import { RedshiftSettings } from "./redshiftsettings";
import { S3Settings } from "./s3settings";
import { DmsSslModeValueEnum } from "./dmssslmodevalueenum";
import { SybaseSettings } from "./sybasesettings";
/**
 * <p>Describes an endpoint of a database instance in response to operations such as the following:</p> <ul> <li> <p> <code>CreateEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpoint</code> </p> </li> <li> <p> <code>ModifyEndpoint</code> </p> </li> </ul>
**/
export declare class Endpoint extends SpeakeasyBase {
    certificateArn?: string;
    databaseName?: string;
    dmsTransferSettings?: DmsTransferSettings;
    docDbSettings?: DocDbSettings;
    dynamoDbSettings?: DynamoDbSettings;
    elasticsearchSettings?: ElasticsearchSettings;
    endpointArn?: string;
    endpointIdentifier?: string;
    endpointType?: ReplicationEndpointTypeValueEnum;
    engineDisplayName?: string;
    engineName?: string;
    externalId?: string;
    externalTableDefinition?: string;
    extraConnectionAttributes?: string;
    ibmDb2Settings?: IbmDb2Settings;
    kafkaSettings?: KafkaSettings;
    kinesisSettings?: KinesisSettings;
    kmsKeyId?: string;
    microsoftSqlServerSettings?: MicrosoftSqlServerSettings;
    mongoDbSettings?: MongoDbSettings;
    mySqlSettings?: MySqlSettings;
    neptuneSettings?: NeptuneSettings;
    oracleSettings?: OracleSettings;
    port?: number;
    postgreSqlSettings?: PostgreSqlSettings;
    redisSettings?: RedisSettings;
    redshiftSettings?: RedshiftSettings;
    s3Settings?: S3Settings;
    serverName?: string;
    serviceAccessRoleArn?: string;
    sslMode?: DmsSslModeValueEnum;
    status?: string;
    sybaseSettings?: SybaseSettings;
    username?: string;
}
