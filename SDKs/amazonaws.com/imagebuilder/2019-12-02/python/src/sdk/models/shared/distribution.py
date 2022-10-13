from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import amidistributionconfiguration
from . import containerdistributionconfiguration
from . import launchtemplateconfiguration


@dataclass_json
@dataclass
class Distribution:
    ami_distribution_configuration: Optional[amidistributionconfiguration.AmiDistributionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amiDistributionConfiguration' }})
    container_distribution_configuration: Optional[containerdistributionconfiguration.ContainerDistributionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerDistributionConfiguration' }})
    launch_template_configurations: Optional[List[launchtemplateconfiguration.LaunchTemplateConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchTemplateConfigurations' }})
    license_configuration_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licenseConfigurationArns' }})
    region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    
