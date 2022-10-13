from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dmstransfersettings
from . import docdbsettings
from . import dynamodbsettings
from . import elasticsearchsettings
from . import replicationendpointtypevalue_enum
from . import ibmdb2settings
from . import kafkasettings
from . import kinesissettings
from . import microsoftsqlserversettings
from . import mongodbsettings
from . import mysqlsettings
from . import neptunesettings
from . import oraclesettings
from . import postgresqlsettings
from . import redissettings
from . import redshiftsettings
from . import s3settings
from . import dmssslmodevalue_enum
from . import sybasesettings


@dataclass_json
@dataclass
class ModifyEndpointMessage:
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateArn' }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    dms_transfer_settings: Optional[dmstransfersettings.DmsTransferSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DmsTransferSettings' }})
    doc_db_settings: Optional[docdbsettings.DocDbSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocDbSettings' }})
    dynamo_db_settings: Optional[dynamodbsettings.DynamoDbSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DynamoDbSettings' }})
    elasticsearch_settings: Optional[elasticsearchsettings.ElasticsearchSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ElasticsearchSettings' }})
    endpoint_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointArn' }})
    endpoint_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointIdentifier' }})
    endpoint_type: Optional[replicationendpointtypevalue_enum.ReplicationEndpointTypeValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointType' }})
    engine_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineName' }})
    exact_settings: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExactSettings' }})
    external_table_definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExternalTableDefinition' }})
    extra_connection_attributes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtraConnectionAttributes' }})
    ibm_db2_settings: Optional[ibmdb2settings.IbmDb2Settings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IBMDb2Settings' }})
    kafka_settings: Optional[kafkasettings.KafkaSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KafkaSettings' }})
    kinesis_settings: Optional[kinesissettings.KinesisSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisSettings' }})
    microsoft_sql_server_settings: Optional[microsoftsqlserversettings.MicrosoftSQLServerSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MicrosoftSQLServerSettings' }})
    mongo_db_settings: Optional[mongodbsettings.MongoDbSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MongoDbSettings' }})
    my_sql_settings: Optional[mysqlsettings.MySQLSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MySQLSettings' }})
    neptune_settings: Optional[neptunesettings.NeptuneSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NeptuneSettings' }})
    oracle_settings: Optional[oraclesettings.OracleSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OracleSettings' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Port' }})
    postgre_sql_settings: Optional[postgresqlsettings.PostgreSQLSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostgreSQLSettings' }})
    redis_settings: Optional[redissettings.RedisSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedisSettings' }})
    redshift_settings: Optional[redshiftsettings.RedshiftSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedshiftSettings' }})
    s3_settings: Optional[s3settings.S3Settings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Settings' }})
    server_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerName' }})
    service_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceAccessRoleArn' }})
    ssl_mode: Optional[dmssslmodevalue_enum.DmsSslModeValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SslMode' }})
    sybase_settings: Optional[sybasesettings.SybaseSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SybaseSettings' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    
