from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import provisionedthroughput


@dataclass_json
@dataclass
class UpdateGlobalSecondaryIndexAction:
    index_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexName' }})
    provisioned_throughput: provisionedthroughput.ProvisionedThroughput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedThroughput' }})
    
