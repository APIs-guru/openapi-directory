from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import owner_enum
from . import sourcedetail


@dataclass_json
@dataclass
class Source:
    owner: owner_enum.OwnerEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Owner' }})
    source_details: Optional[List[sourcedetail.SourceDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceDetails' }})
    source_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceIdentifier' }})
    
