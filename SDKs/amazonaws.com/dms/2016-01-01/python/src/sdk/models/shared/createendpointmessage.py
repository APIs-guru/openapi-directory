from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateEndpointMessage:
    r"""CreateEndpointMessage
    <p/>
    """
    
    endpoint_identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointIdentifier') }})
    endpoint_type: ReplicationEndpointTypeValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointType') }})
    engine_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineName') }})
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateArn') }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    dms_transfer_settings: Optional[DmsTransferSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DmsTransferSettings') }})
    doc_db_settings: Optional[DocDbSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocDbSettings') }})
    dynamo_db_settings: Optional[DynamoDbSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DynamoDbSettings') }})
    elasticsearch_settings: Optional[ElasticsearchSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticsearchSettings') }})
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
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Port') }})
    postgre_sql_settings: Optional[PostgreSQLSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostgreSQLSettings') }})
    redis_settings: Optional[RedisSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedisSettings') }})
    redshift_settings: Optional[RedshiftSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedshiftSettings') }})
    resource_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceIdentifier') }})
    s3_settings: Optional[S3Settings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Settings') }})
    server_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerName') }})
    service_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceAccessRoleArn') }})
    ssl_mode: Optional[DmsSslModeValueEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SslMode') }})
    sybase_settings: Optional[SybaseSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SybaseSettings') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
