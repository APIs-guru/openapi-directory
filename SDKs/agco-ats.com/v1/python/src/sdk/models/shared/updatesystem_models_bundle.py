from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateSystemModelsBundle:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Active' }, 'form': { 'field_name': 'Active' }})
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BundleID' }, 'form': { 'field_name': 'BundleID' }})
    bundle_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BundleNumber' }, 'form': { 'field_name': 'BundleNumber' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }, 'form': { 'field_name': 'Description' }})
    update_group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateGroupID' }, 'form': { 'field_name': 'UpdateGroupID' }})
    
