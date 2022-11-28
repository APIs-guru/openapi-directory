from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReplicaGlobalSecondaryIndexDescription:
    r"""ReplicaGlobalSecondaryIndexDescription
    Represents the properties of a replica global secondary index.
    """
    
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    provisioned_throughput_override: Optional[ProvisionedThroughputOverride] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughputOverride') }})
    
