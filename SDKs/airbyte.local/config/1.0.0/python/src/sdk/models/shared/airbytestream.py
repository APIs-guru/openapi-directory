from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import syncmode_enum


@dataclass_json
@dataclass
class AirbyteStream:
    default_cursor_field: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultCursorField' }})
    json_schema: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jsonSchema' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespace' }})
    source_defined_cursor: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceDefinedCursor' }})
    source_defined_primary_key: Optional[List[List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceDefinedPrimaryKey' }})
    supported_sync_modes: Optional[List[syncmode_enum.SyncModeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedSyncModes' }})
    
