from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import apistage
from . import quotasettings
from . import throttlesettings


@dataclass_json
@dataclass
class UsagePlan:
    api_stages: Optional[List[apistage.APIStage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiStages' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCode' }})
    quota: Optional[quotasettings.QuotaSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quota' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    throttle: Optional[throttlesettings.ThrottleSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'throttle' }})
    
