from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import alias


@dataclass_json
@dataclass
class ListAliasesOutput:
    aliases: Optional[List[alias.Alias]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Aliases' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
