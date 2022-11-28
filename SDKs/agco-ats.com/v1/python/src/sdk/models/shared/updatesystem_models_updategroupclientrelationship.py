from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateSystemModelsUpdateGroupClientRelationship:
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientID') }, 'form': { 'field_name': 'ClientID' }})
    update_group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateGroupID') }, 'form': { 'field_name': 'UpdateGroupID' }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Active') }, 'form': { 'field_name': 'Active' }})
    last_checkin: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastCheckin'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'LastCheckin' }})
    relationship_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelationshipID') }, 'form': { 'field_name': 'RelationshipID' }})
    
