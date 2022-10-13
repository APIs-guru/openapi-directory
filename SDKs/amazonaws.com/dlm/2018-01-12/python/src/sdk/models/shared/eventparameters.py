from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import eventtypevalues_enum


@dataclass_json
@dataclass
class EventParameters:
    description_regex: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DescriptionRegex' }})
    event_type: eventtypevalues_enum.EventTypeValuesEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventType' }})
    snapshot_owner: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotOwner' }})
    
