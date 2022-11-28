from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReplicationGroupUpdate:
    r"""ReplicationGroupUpdate
    <p>Represents one of the following:</p> <ul> <li> <p>A new replica to be added to an existing regional table or global table. This request invokes the <code>CreateTableReplica</code> action in the destination Region.</p> </li> <li> <p>New parameters for an existing replica. This request invokes the <code>UpdateTable</code> action in the destination Region.</p> </li> <li> <p>An existing replica to be deleted. The request invokes the <code>DeleteTableReplica</code> action in the destination Region, deleting the replica and all if its items in the destination Region.</p> </li> </ul>
    """
    
    create: Optional[CreateReplicationGroupMemberAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Create') }})
    delete: Optional[DeleteReplicationGroupMemberAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Delete') }})
    update: Optional[UpdateReplicationGroupMemberAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Update') }})
    
