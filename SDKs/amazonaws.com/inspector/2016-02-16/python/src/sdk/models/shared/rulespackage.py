from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RulesPackage:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    provider: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
