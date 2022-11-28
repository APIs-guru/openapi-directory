from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DynamoDbAction:
    r"""DynamoDbAction
    <p>Describes an action to write to a DynamoDB table.</p> <p>The <code>tableName</code>, <code>hashKeyField</code>, and <code>rangeKeyField</code> values must match the values used when you created the table.</p> <p>The <code>hashKeyValue</code> and <code>rangeKeyvalue</code> fields use a substitution template syntax. These templates provide data at runtime. The syntax is as follows: ${<i>sql-expression</i>}.</p> <p>You can specify any valid expression in a WHERE or SELECT clause, including JSON properties, comparisons, calculations, and functions. For example, the following field uses the third level of the topic:</p> <p> <code>\"hashKeyValue\": \"${topic(3)}\"</code> </p> <p>The following field uses the timestamp:</p> <p> <code>\"rangeKeyValue\": \"${timestamp()}\"</code> </p>
    """
    
    hash_key_field: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashKeyField') }})
    hash_key_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashKeyValue') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableName') }})
    hash_key_type: Optional[DynamoKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashKeyType') }})
    operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    payload_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payloadField') }})
    range_key_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rangeKeyField') }})
    range_key_type: Optional[DynamoKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rangeKeyType') }})
    range_key_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rangeKeyValue') }})
    
