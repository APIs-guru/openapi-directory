from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReplicationPendingModifiedValues:
    r"""ReplicationPendingModifiedValues
    Provides information about the values of pending modifications to a replication instance. This data type is an object of the <a href=\"https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationInstance.html\"> <code>ReplicationInstance</code> </a> user-defined data type. 
    """
    
    allocated_storage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllocatedStorage') }})
    engine_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineVersion') }})
    multi_az: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MultiAZ') }})
    replication_instance_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationInstanceClass') }})
    
