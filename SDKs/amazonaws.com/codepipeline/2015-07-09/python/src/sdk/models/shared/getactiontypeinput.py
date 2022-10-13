from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import actioncategory_enum


@dataclass_json
@dataclass
class GetActionTypeInput:
    category: actioncategory_enum.ActionCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    owner: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    provider: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
