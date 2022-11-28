from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BuildSystemSharedDtoAgentStatus:
    r"""BuildSystemSharedDtoAgentStatus
    A DTO for an IAgentStatus
    """
    
    online: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Online') }, 'form': { 'field_name': 'Online' }})
    last_status_update: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastStatusUpdate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'LastStatusUpdate' }})
    
