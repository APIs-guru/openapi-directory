import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// Endpoint
/** 
 * <p>Describes an endpoint of a database instance in response to operations such as the following:</p> <ul> <li> <p> <code>CreateEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpoint</code> </p> </li> <li> <p> <code>ModifyEndpoint</code> </p> </li> </ul>
**/
export class Endpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateArn" })
  certificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=DmsTransferSettings" })
  dmsTransferSettings?: DmsTransferSettings;

  @SpeakeasyMetadata({ data: "json, name=DocDbSettings" })
  docDbSettings?: DocDbSettings;

  @SpeakeasyMetadata({ data: "json, name=DynamoDbSettings" })
  dynamoDbSettings?: DynamoDbSettings;

  @SpeakeasyMetadata({ data: "json, name=ElasticsearchSettings" })
  elasticsearchSettings?: ElasticsearchSettings;

  @SpeakeasyMetadata({ data: "json, name=EndpointArn" })
  endpointArn?: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointIdentifier" })
  endpointIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointType" })
  endpointType?: ReplicationEndpointTypeValueEnum;

  @SpeakeasyMetadata({ data: "json, name=EngineDisplayName" })
  engineDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=EngineName" })
  engineName?: string;

  @SpeakeasyMetadata({ data: "json, name=ExternalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=ExternalTableDefinition" })
  externalTableDefinition?: string;

  @SpeakeasyMetadata({ data: "json, name=ExtraConnectionAttributes" })
  extraConnectionAttributes?: string;

  @SpeakeasyMetadata({ data: "json, name=IBMDb2Settings" })
  ibmDb2Settings?: IbmDb2Settings;

  @SpeakeasyMetadata({ data: "json, name=KafkaSettings" })
  kafkaSettings?: KafkaSettings;

  @SpeakeasyMetadata({ data: "json, name=KinesisSettings" })
  kinesisSettings?: KinesisSettings;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=MicrosoftSQLServerSettings" })
  microsoftSqlServerSettings?: MicrosoftSqlServerSettings;

  @SpeakeasyMetadata({ data: "json, name=MongoDbSettings" })
  mongoDbSettings?: MongoDbSettings;

  @SpeakeasyMetadata({ data: "json, name=MySQLSettings" })
  mySqlSettings?: MySqlSettings;

  @SpeakeasyMetadata({ data: "json, name=NeptuneSettings" })
  neptuneSettings?: NeptuneSettings;

  @SpeakeasyMetadata({ data: "json, name=OracleSettings" })
  oracleSettings?: OracleSettings;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=PostgreSQLSettings" })
  postgreSqlSettings?: PostgreSqlSettings;

  @SpeakeasyMetadata({ data: "json, name=RedisSettings" })
  redisSettings?: RedisSettings;

  @SpeakeasyMetadata({ data: "json, name=RedshiftSettings" })
  redshiftSettings?: RedshiftSettings;

  @SpeakeasyMetadata({ data: "json, name=S3Settings" })
  s3Settings?: S3Settings;

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceAccessRoleArn" })
  serviceAccessRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SslMode" })
  sslMode?: DmsSslModeValueEnum;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=SybaseSettings" })
  sybaseSettings?: SybaseSettings;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username?: string;
}
