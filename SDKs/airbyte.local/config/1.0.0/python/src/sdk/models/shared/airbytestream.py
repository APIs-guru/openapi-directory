from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AirbyteStream:
    r"""AirbyteStream
    the immutable schema defined by the source
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    default_cursor_field: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultCursorField') }})
    json_schema: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonSchema') }})
    namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespace') }})
    source_defined_cursor: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceDefinedCursor') }})
    source_defined_primary_key: Optional[List[List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceDefinedPrimaryKey') }})
    supported_sync_modes: Optional[List[SyncModeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedSyncModes') }})
    
