from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AirbyteStreamConfiguration:
    r"""AirbyteStreamConfiguration
    the mutable part of the stream to configure the destination
    """
    
    destination_sync_mode: DestinationSyncModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationSyncMode') }})
    sync_mode: SyncModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncMode') }})
    alias_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aliasName') }})
    cursor_field: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cursorField') }})
    primary_key: Optional[List[List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryKey') }})
    selected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected') }})
    
