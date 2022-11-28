from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Endpoint:
    r"""Endpoint
    <p>Describes an endpoint of a database instance in response to operations such as the following:</p> <ul> <li> <p> <code>CreateEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpoint</code> </p> </li> <li> <p> <code>ModifyEndpoint</code> </p> </li> </ul>
    """
    
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateArn') }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    dms_transfer_settings: Optional[DmsTransferSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DmsTransferSettings') }})
    doc_db_settings: Optional[DocDbSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocDbSettings') }})
    dynamo_db_settings: Optional[DynamoDbSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DynamoDbSettings') }})
    elasticsearch_settings: Optional[ElasticsearchSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticsearchSettings') }})
    endpoint_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointArn') }})
    endpoint_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointIdentifier') }})
    endpoint_type: Optional[ReplicationEndpointTypeValueEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointType') }})
    engine_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineDisplayName') }})
    engine_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineName') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalId') }})
    external_table_definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalTableDefinition') }})
    extra_connection_attributes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtraConnectionAttributes') }})
    ibm_db2_settings: Optional[IbmDb2Settings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IBMDb2Settings') }})
    kafka_settings: Optional[KafkaSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KafkaSettings') }})
    kinesis_settings: Optional[KinesisSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisSettings') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    microsoft_sql_server_settings: Optional[MicrosoftSQLServerSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MicrosoftSQLServerSettings') }})
    mongo_db_settings: Optional[MongoDbSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MongoDbSettings') }})
    my_sql_settings: Optional[MySQLSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MySQLSettings') }})
    neptune_settings: Optional[NeptuneSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NeptuneSettings') }})
    oracle_settings: Optional[OracleSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OracleSettings') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Port') }})
    postgre_sql_settings: Optional[PostgreSQLSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostgreSQLSettings') }})
    redis_settings: Optional[RedisSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedisSettings') }})
    redshift_settings: Optional[RedshiftSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedshiftSettings') }})
    s3_settings: Optional[S3Settings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Settings') }})
    server_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerName') }})
    service_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceAccessRoleArn') }})
    ssl_mode: Optional[DmsSslModeValueEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SslMode') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    sybase_settings: Optional[SybaseSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SybaseSettings') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
