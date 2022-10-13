from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import createreplicationgroupmemberaction
from . import deletereplicationgroupmemberaction
from . import updatereplicationgroupmemberaction


@dataclass_json
@dataclass
class ReplicationGroupUpdate:
    create: Optional[createreplicationgroupmemberaction.CreateReplicationGroupMemberAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Create' }})
    delete: Optional[deletereplicationgroupmemberaction.DeleteReplicationGroupMemberAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Delete' }})
    update: Optional[updatereplicationgroupmemberaction.UpdateReplicationGroupMemberAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Update' }})
    
