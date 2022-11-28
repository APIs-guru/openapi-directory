from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UpdateSystemModelsPackageTypeIDtoBundleSubscriptionTypeEnum(str, Enum):
    REQUIRED = "Required"
    INCLUDE_BY_DEFAULT = "IncludeByDefault"
    EXCLUDE_BY_DEFAULT = "ExcludeByDefault"


@dataclass_json
@dataclass
class UpdateSystemModelsPackageTypeIDtoBundle:
    bundle_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BundleID') }, 'form': { 'field_name': 'BundleID' }})
    package_type_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PackageTypeID') }, 'form': { 'field_name': 'PackageTypeID' }})
    package_version: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PackageVersion') }, 'form': { 'field_name': 'PackageVersion' }})
    priority: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }, 'form': { 'field_name': 'Priority' }})
    subscription_type: Optional[UpdateSystemModelsPackageTypeIDtoBundleSubscriptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionType') }, 'form': { 'field_name': 'SubscriptionType' }})
    
