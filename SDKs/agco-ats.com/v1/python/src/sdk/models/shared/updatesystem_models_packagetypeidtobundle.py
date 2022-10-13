from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class UpdateSystemModelsPackageTypeIDtoBundleSubscriptionTypeEnum(str, Enum):
    REQUIRED = "Required"
    INCLUDE_BY_DEFAULT = "IncludeByDefault"
    EXCLUDE_BY_DEFAULT = "ExcludeByDefault"


@dataclass_json
@dataclass
class UpdateSystemModelsPackageTypeIDtoBundle:
    bundle_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BundleID' }, 'form': { 'field_name': 'BundleID' }})
    package_type_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PackageTypeID' }, 'form': { 'field_name': 'PackageTypeID' }})
    package_version: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PackageVersion' }, 'form': { 'field_name': 'PackageVersion' }})
    priority: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }, 'form': { 'field_name': 'Priority' }})
    subscription_type: Optional[UpdateSystemModelsPackageTypeIDtoBundleSubscriptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubscriptionType' }, 'form': { 'field_name': 'SubscriptionType' }})
    
