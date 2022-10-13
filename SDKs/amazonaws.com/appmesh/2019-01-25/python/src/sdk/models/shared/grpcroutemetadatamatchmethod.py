from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import matchrange


@dataclass_json
@dataclass
class GrpcRouteMetadataMatchMethod:
    exact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exact' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    range: Optional[matchrange.MatchRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regex' }})
    suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suffix' }})
    
