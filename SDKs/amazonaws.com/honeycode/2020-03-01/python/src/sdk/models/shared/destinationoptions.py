from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sourcedatacolumnproperties


@dataclass_json
@dataclass
class DestinationOptions:
    column_map: Optional[dict[str, sourcedatacolumnproperties.SourceDataColumnProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnMap' }})
    
