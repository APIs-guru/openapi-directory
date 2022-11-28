from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class UpdateSystemModelsAvailableSubscriptionSubscriptionTypeEnum(str, Enum):
    REQUIRED = "Required"
    INCLUDE_BY_DEFAULT = "IncludeByDefault"
    EXCLUDE_BY_DEFAULT = "ExcludeByDefault"


@dataclass_json
@dataclass
class UpdateSystemModelsAvailableSubscription:
    package_type: Optional[UpdateSystemModelsPackageType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PackageType') }})
    subscription_type: Optional[UpdateSystemModelsAvailableSubscriptionSubscriptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionType') }})
    
