from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import replicaglobalsecondaryindex
from . import provisionedthroughputoverride


@dataclass_json
@dataclass
class UpdateReplicationGroupMemberAction:
    global_secondary_indexes: Optional[List[replicaglobalsecondaryindex.ReplicaGlobalSecondaryIndex]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalSecondaryIndexes' }})
    kms_master_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KMSMasterKeyId' }})
    provisioned_throughput_override: Optional[provisionedthroughputoverride.ProvisionedThroughputOverride] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedThroughputOverride' }})
    region_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegionName' }})
    
