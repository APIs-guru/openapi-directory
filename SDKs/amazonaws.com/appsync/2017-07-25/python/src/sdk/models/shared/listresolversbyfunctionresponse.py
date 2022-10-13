from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resolver


@dataclass_json
@dataclass
class ListResolversByFunctionResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    resolvers: Optional[List[resolver.Resolver]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolvers' }})
    
