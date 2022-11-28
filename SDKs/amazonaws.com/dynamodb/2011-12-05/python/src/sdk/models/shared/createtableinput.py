from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateTableInput:
    key_schema: KeySchema = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeySchema') }})
    provisioned_throughput: ProvisionedThroughput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughput') }})
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    
