from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import provisionedthroughput


@dataclass_json
@dataclass
class UpdateTableInput:
    provisioned_throughput: provisionedthroughput.ProvisionedThroughput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedThroughput' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
