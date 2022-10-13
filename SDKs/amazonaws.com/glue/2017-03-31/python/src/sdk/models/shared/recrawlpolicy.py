from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import recrawlbehavior_enum


@dataclass_json
@dataclass
class RecrawlPolicy:
    recrawl_behavior: Optional[recrawlbehavior_enum.RecrawlBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecrawlBehavior' }})
    
