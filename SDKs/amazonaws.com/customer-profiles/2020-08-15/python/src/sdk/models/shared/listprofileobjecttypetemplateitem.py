from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListProfileObjectTypeTemplateItem:
    source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceName' }})
    source_object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceObject' }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateId' }})
    
