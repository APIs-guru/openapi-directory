from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import transformfiltercriteria
from . import transformsortcriteria


@dataclass_json
@dataclass
class GetMlTransformsRequest:
    filter: Optional[transformfiltercriteria.TransformFilterCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filter' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    sort: Optional[transformsortcriteria.TransformSortCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sort' }})
    
