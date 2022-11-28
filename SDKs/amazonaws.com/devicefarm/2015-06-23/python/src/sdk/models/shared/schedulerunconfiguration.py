from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScheduleRunConfiguration:
    r"""ScheduleRunConfiguration
    Represents the settings for a run. Includes things like location, radio states, auxiliary apps, and network profiles.
    """
    
    auxiliary_apps: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auxiliaryApps') }})
    billing_method: Optional[BillingMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingMethod') }})
    customer_artifact_paths: Optional[CustomerArtifactPaths] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerArtifactPaths') }})
    extra_data_package_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extraDataPackageArn') }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    network_profile_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkProfileArn') }})
    radios: Optional[Radios] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radios') }})
    vpce_configuration_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpceConfigurationArns') }})
    
