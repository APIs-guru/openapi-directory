from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import field
from . import field
from . import thinggroupindexingmode_enum


@dataclass_json
@dataclass
class ThingGroupIndexingConfiguration:
    custom_fields: Optional[List[field.Field]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customFields' }})
    managed_fields: Optional[List[field.Field]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedFields' }})
    thing_group_indexing_mode: thinggroupindexingmode_enum.ThingGroupIndexingModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingGroupIndexingMode' }})
    
