from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resolver


@dataclass_json
@dataclass
class UpdateResolverResponse:
    resolver: Optional[resolver.Resolver] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolver' }})
    
