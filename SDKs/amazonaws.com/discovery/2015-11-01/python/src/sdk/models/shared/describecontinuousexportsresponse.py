from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import continuousexportdescription


@dataclass_json
@dataclass
class DescribeContinuousExportsResponse:
    descriptions: Optional[List[continuousexportdescription.ContinuousExportDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'descriptions' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
