from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import documentclassifierfilter


@dataclass_json
@dataclass
class ListDocumentClassifiersRequest:
    filter: Optional[documentclassifierfilter.DocumentClassifierFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filter' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
