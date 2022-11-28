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
class ReplicaUpdate:
    r"""ReplicaUpdate
    <p>Represents one of the following:</p> <ul> <li> <p>A new replica to be added to an existing global table.</p> </li> <li> <p>New parameters for an existing replica.</p> </li> <li> <p>An existing replica to be removed from an existing global table.</p> </li> </ul>
    """
    
    create: Optional[CreateReplicaAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Create') }})
    delete: Optional[DeleteReplicaAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Delete') }})
    
