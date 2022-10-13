from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import objectreference
from . import objectattributerange


@dataclass_json
@dataclass
class BatchListIndex:
    index_reference: objectreference.ObjectReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexReference' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    ranges_on_indexed_values: Optional[List[objectattributerange.ObjectAttributeRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RangesOnIndexedValues' }})
    
