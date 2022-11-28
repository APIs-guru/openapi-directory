from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Distribution:
    r"""Distribution
     Defines the settings for a specific Region.
    """
    
    region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    ami_distribution_configuration: Optional[AmiDistributionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amiDistributionConfiguration') }})
    container_distribution_configuration: Optional[ContainerDistributionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerDistributionConfiguration') }})
    launch_template_configurations: Optional[List[LaunchTemplateConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchTemplateConfigurations') }})
    license_configuration_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseConfigurationArns') }})
    
