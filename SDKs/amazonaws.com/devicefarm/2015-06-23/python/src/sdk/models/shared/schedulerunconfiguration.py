from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import billingmethod_enum
from . import customerartifactpaths
from . import location
from . import radios


@dataclass_json
@dataclass
class ScheduleRunConfiguration:
    auxiliary_apps: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auxiliaryApps' }})
    billing_method: Optional[billingmethod_enum.BillingMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingMethod' }})
    customer_artifact_paths: Optional[customerartifactpaths.CustomerArtifactPaths] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerArtifactPaths' }})
    extra_data_package_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extraDataPackageArn' }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    network_profile_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkProfileArn' }})
    radios: Optional[radios.Radios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radios' }})
    vpce_configuration_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpceConfigurationArns' }})
    
