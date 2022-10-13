from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import provisionedthroughputoverride


@dataclass_json
@dataclass
class ReplicaGlobalSecondaryIndex:
    index_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexName' }})
    provisioned_throughput_override: Optional[provisionedthroughputoverride.ProvisionedThroughputOverride] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedThroughputOverride' }})
    
