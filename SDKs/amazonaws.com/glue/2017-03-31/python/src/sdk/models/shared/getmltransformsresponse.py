from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import mltransform


@dataclass_json
@dataclass
class GetMlTransformsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    transforms: List[mltransform.MlTransform] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Transforms' }})
    
