from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import othermetadatavaluelistitem


@dataclass_json
@dataclass
class MetadataInfo:
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime' }})
    metadata_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataValue' }})
    other_metadata_value_list: Optional[List[othermetadatavaluelistitem.OtherMetadataValueListItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherMetadataValueList' }})
    
