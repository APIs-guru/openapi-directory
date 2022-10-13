from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateSystemModelsUpdateGroupSubscription:
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientID' }, 'form': { 'field_name': 'ClientID' }})
    include: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Include' }, 'form': { 'field_name': 'Include' }})
    package_type_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PackageTypeID' }, 'form': { 'field_name': 'PackageTypeID' }})
    update_group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateGroupID' }, 'form': { 'field_name': 'UpdateGroupID' }})
    update_group_subscription_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateGroupSubscriptionID' }, 'form': { 'field_name': 'UpdateGroupSubscriptionID' }})
    
