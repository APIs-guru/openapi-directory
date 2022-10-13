from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import alias


@dataclass_json
@dataclass
class DescribeAliasOutput:
    alias: Optional[alias.Alias] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Alias' }})
    
