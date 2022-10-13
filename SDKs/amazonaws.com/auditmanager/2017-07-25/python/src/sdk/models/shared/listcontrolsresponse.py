from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import controlmetadata


@dataclass_json
@dataclass
class ListControlsResponse:
    control_metadata_list: Optional[List[controlmetadata.ControlMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controlMetadataList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
