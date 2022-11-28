from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateReplicationGroupMemberAction:
    r"""CreateReplicationGroupMemberAction
    Represents a replica to be created.
    """
    
    region_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegionName') }})
    global_secondary_indexes: Optional[List[ReplicaGlobalSecondaryIndex]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalSecondaryIndexes') }})
    kms_master_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KMSMasterKeyId') }})
    provisioned_throughput_override: Optional[ProvisionedThroughputOverride] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughputOverride') }})
    
