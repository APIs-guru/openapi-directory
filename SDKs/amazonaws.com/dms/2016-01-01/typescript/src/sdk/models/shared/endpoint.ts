import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=CertificateArn" })
  certificateArn?: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @Metadata({ data: "json, name=DmsTransferSettings" })
  dmsTransferSettings?: DmsTransferSettings;

  @Metadata({ data: "json, name=DocDbSettings" })
  docDbSettings?: DocDbSettings;

  @Metadata({ data: "json, name=DynamoDbSettings" })
  dynamoDbSettings?: DynamoDbSettings;

  @Metadata({ data: "json, name=ElasticsearchSettings" })
  elasticsearchSettings?: ElasticsearchSettings;

  @Metadata({ data: "json, name=EndpointArn" })
  endpointArn?: string;

  @Metadata({ data: "json, name=EndpointIdentifier" })
  endpointIdentifier?: string;

  @Metadata({ data: "json, name=EndpointType" })
  endpointType?: ReplicationEndpointTypeValueEnum;

  @Metadata({ data: "json, name=EngineDisplayName" })
  engineDisplayName?: string;

  @Metadata({ data: "json, name=EngineName" })
  engineName?: string;

  @Metadata({ data: "json, name=ExternalId" })
  externalId?: string;

  @Metadata({ data: "json, name=ExternalTableDefinition" })
  externalTableDefinition?: string;

  @Metadata({ data: "json, name=ExtraConnectionAttributes" })
  extraConnectionAttributes?: string;

  @Metadata({ data: "json, name=IBMDb2Settings" })
  ibmDb2Settings?: IbmDb2Settings;

  @Metadata({ data: "json, name=KafkaSettings" })
  kafkaSettings?: KafkaSettings;

  @Metadata({ data: "json, name=KinesisSettings" })
  kinesisSettings?: KinesisSettings;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=MicrosoftSQLServerSettings" })
  microsoftSqlServerSettings?: MicrosoftSqlServerSettings;

  @Metadata({ data: "json, name=MongoDbSettings" })
  mongoDbSettings?: MongoDbSettings;

  @Metadata({ data: "json, name=MySQLSettings" })
  mySqlSettings?: MySqlSettings;

  @Metadata({ data: "json, name=NeptuneSettings" })
  neptuneSettings?: NeptuneSettings;

  @Metadata({ data: "json, name=OracleSettings" })
  oracleSettings?: OracleSettings;

  @Metadata({ data: "json, name=Port" })
  port?: number;

  @Metadata({ data: "json, name=PostgreSQLSettings" })
  postgreSqlSettings?: PostgreSqlSettings;

  @Metadata({ data: "json, name=RedisSettings" })
  redisSettings?: RedisSettings;

  @Metadata({ data: "json, name=RedshiftSettings" })
  redshiftSettings?: RedshiftSettings;

  @Metadata({ data: "json, name=S3Settings" })
  s3Settings?: S3Settings;

  @Metadata({ data: "json, name=ServerName" })
  serverName?: string;

  @Metadata({ data: "json, name=ServiceAccessRoleArn" })
  serviceAccessRoleArn?: string;

  @Metadata({ data: "json, name=SslMode" })
  sslMode?: DmsSslModeValueEnum;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=SybaseSettings" })
  sybaseSettings?: SybaseSettings;

  @Metadata({ data: "json, name=Username" })
  username?: string;
}
