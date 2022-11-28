from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KinesisSettings:
    r"""KinesisSettings
    Provides information that describes an Amazon Kinesis Data Stream endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information.
    """
    
    include_control_details: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeControlDetails') }})
    include_null_and_empty: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeNullAndEmpty') }})
    include_partition_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludePartitionValue') }})
    include_table_alter_operations: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeTableAlterOperations') }})
    include_transaction_details: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeTransactionDetails') }})
    message_format: Optional[MessageFormatValueEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageFormat') }})
    no_hex_prefix: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoHexPrefix') }})
    partition_include_schema_table: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionIncludeSchemaTable') }})
    service_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceAccessRoleArn') }})
    stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamArn') }})
    
