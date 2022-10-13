from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import namedquery
from . import unprocessednamedqueryid


@dataclass_json
@dataclass
class BatchGetNamedQueryOutput:
    named_queries: Optional[List[namedquery.NamedQuery]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NamedQueries' }})
    unprocessed_named_query_ids: Optional[List[unprocessednamedqueryid.UnprocessedNamedQueryID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnprocessedNamedQueryIds' }})
    
