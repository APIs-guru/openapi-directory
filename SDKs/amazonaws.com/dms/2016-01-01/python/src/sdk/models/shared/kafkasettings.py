from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import messageformatvalue_enum
from . import kafkasecurityprotocol_enum


@dataclass_json
@dataclass
class KafkaSettings:
    broker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Broker' }})
    include_control_details: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeControlDetails' }})
    include_null_and_empty: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeNullAndEmpty' }})
    include_partition_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludePartitionValue' }})
    include_table_alter_operations: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeTableAlterOperations' }})
    include_transaction_details: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeTransactionDetails' }})
    message_format: Optional[messageformatvalue_enum.MessageFormatValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageFormat' }})
    message_max_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageMaxBytes' }})
    no_hex_prefix: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NoHexPrefix' }})
    partition_include_schema_table: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartitionIncludeSchemaTable' }})
    sasl_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SaslPassword' }})
    sasl_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SaslUsername' }})
    security_protocol: Optional[kafkasecurityprotocol_enum.KafkaSecurityProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityProtocol' }})
    ssl_ca_certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SslCaCertificateArn' }})
    ssl_client_certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SslClientCertificateArn' }})
    ssl_client_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SslClientKeyArn' }})
    ssl_client_key_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SslClientKeyPassword' }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Topic' }})
    
