from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import actioncategory_enum
from . import actionowner_enum


@dataclass_json
@dataclass
class ActionTypeID:
    category: actioncategory_enum.ActionCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    owner: actionowner_enum.ActionOwnerEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    provider: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
