from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import groupnameandarn


@dataclass_json
@dataclass
class ThingGroupMetadata:
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    parent_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentGroupName' }})
    root_to_parent_thing_groups: Optional[List[groupnameandarn.GroupNameAndArn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rootToParentThingGroups' }})
    
