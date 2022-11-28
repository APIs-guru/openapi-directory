from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeRegistryResponse:
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryId') }})
    replication_configuration: Optional[ReplicationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationConfiguration') }})
    
