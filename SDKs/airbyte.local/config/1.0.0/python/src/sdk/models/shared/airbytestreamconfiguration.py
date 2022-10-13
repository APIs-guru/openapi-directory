from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import destinationsyncmode_enum
from . import syncmode_enum


@dataclass_json
@dataclass
class AirbyteStreamConfiguration:
    alias_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aliasName' }})
    cursor_field: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursorField' }})
    destination_sync_mode: destinationsyncmode_enum.DestinationSyncModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationSyncMode' }})
    primary_key: Optional[List[List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryKey' }})
    selected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selected' }})
    sync_mode: syncmode_enum.SyncModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncMode' }})
    
