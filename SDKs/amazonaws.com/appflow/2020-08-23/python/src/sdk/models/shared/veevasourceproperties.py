from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VeevaSourceProperties:
    document_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentType' }})
    include_all_versions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeAllVersions' }})
    include_renditions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeRenditions' }})
    include_source_files: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeSourceFiles' }})
    object: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    
