from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssociatedClientDevice:
    r"""AssociatedClientDevice
    Contains information about a client device that is associated to a core device for cloud discovery.
    """
    
    association_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associationTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    thing_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingName') }})
    
