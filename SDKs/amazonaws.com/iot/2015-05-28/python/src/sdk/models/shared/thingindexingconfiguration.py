from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import field
from . import field
from . import thingconnectivityindexingmode_enum
from . import thingindexingmode_enum


@dataclass_json
@dataclass
class ThingIndexingConfiguration:
    custom_fields: Optional[List[field.Field]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customFields' }})
    managed_fields: Optional[List[field.Field]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedFields' }})
    thing_connectivity_indexing_mode: Optional[thingconnectivityindexingmode_enum.ThingConnectivityIndexingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingConnectivityIndexingMode' }})
    thing_indexing_mode: thingindexingmode_enum.ThingIndexingModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingIndexingMode' }})
    
