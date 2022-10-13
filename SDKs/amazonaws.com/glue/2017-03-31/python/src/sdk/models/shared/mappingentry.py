from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MappingEntry:
    source_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourcePath' }})
    source_table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceTable' }})
    source_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceType' }})
    target_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetPath' }})
    target_table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetTable' }})
    target_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetType' }})
    
