from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourcevalue
from . import staticvalue


@dataclass_json
@dataclass
class RemediationParameterValue:
    resource_value: Optional[resourcevalue.ResourceValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceValue' }})
    static_value: Optional[staticvalue.StaticValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StaticValue' }})
    
