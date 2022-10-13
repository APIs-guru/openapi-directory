from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import updatesystem_models_availablesubscription
from . import updatesystem_models_updategroup


@dataclass_json
@dataclass
class UpdateSystemModelsAvailableUpdateGroupSubscription:
    available_subscriptions: Optional[List[updatesystem_models_availablesubscription.UpdateSystemModelsAvailableSubscription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailableSubscriptions' }})
    update_group: Optional[updatesystem_models_updategroup.UpdateSystemModelsUpdateGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateGroup' }})
    
