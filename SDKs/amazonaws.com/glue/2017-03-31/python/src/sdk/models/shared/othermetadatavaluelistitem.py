from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OtherMetadataValueListItem:
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime' }})
    metadata_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataValue' }})
    
