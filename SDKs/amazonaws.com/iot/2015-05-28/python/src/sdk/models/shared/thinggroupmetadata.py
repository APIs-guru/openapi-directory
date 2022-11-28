from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ThingGroupMetadata:
    r"""ThingGroupMetadata
    Thing group metadata.
    """
    
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    parent_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentGroupName') }})
    root_to_parent_thing_groups: Optional[List[GroupNameAndArn]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootToParentThingGroups') }})
    
