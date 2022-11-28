from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ModifyReplicationSubnetGroupMessage:
    r"""ModifyReplicationSubnetGroupMessage
    <p/>
    """
    
    replication_subnet_group_identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationSubnetGroupIdentifier') }})
    subnet_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    replication_subnet_group_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationSubnetGroupDescription') }})
    
