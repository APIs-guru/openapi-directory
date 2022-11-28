from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VpceConfiguration:
    r"""VpceConfiguration
    Represents an Amazon Virtual Private Cloud (VPC) endpoint configuration.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    service_dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceDnsName') }})
    vpce_configuration_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpceConfigurationDescription') }})
    vpce_configuration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpceConfigurationName') }})
    vpce_service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpceServiceName') }})
    
