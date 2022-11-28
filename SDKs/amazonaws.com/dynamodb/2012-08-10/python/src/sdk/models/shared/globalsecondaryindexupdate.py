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
class GlobalSecondaryIndexUpdate:
    r"""GlobalSecondaryIndexUpdate
    <p>Represents one of the following:</p> <ul> <li> <p>A new global secondary index to be added to an existing table.</p> </li> <li> <p>New provisioned throughput parameters for an existing global secondary index.</p> </li> <li> <p>An existing global secondary index to be removed from an existing table.</p> </li> </ul>
    """
    
    create: Optional[CreateGlobalSecondaryIndexAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Create') }})
    delete: Optional[DeleteGlobalSecondaryIndexAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Delete') }})
    update: Optional[UpdateGlobalSecondaryIndexAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Update') }})
    
