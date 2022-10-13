from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import analyzedresource


@dataclass_json
@dataclass
class GetAnalyzedResourceResponse:
    resource: Optional[analyzedresource.AnalyzedResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    
