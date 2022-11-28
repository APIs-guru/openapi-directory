from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateServiceRequest:
    service_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceName') }})
    source_configuration: SourceConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceConfiguration') }})
    auto_scaling_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingConfigurationArn') }})
    encryption_configuration: Optional[EncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionConfiguration') }})
    health_check_configuration: Optional[HealthCheckConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckConfiguration') }})
    instance_configuration: Optional[InstanceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceConfiguration') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
