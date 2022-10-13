from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import updatesystem_models_packagetype

class UpdateSystemModelsAvailableSubscriptionSubscriptionTypeEnum(str, Enum):
    REQUIRED = "Required"
    INCLUDE_BY_DEFAULT = "IncludeByDefault"
    EXCLUDE_BY_DEFAULT = "ExcludeByDefault"


@dataclass_json
@dataclass
class UpdateSystemModelsAvailableSubscription:
    package_type: Optional[updatesystem_models_packagetype.UpdateSystemModelsPackageType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PackageType' }})
    subscription_type: Optional[UpdateSystemModelsAvailableSubscriptionSubscriptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubscriptionType' }})
    
