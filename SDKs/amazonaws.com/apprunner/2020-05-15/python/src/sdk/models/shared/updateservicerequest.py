from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateServiceRequest:
    service_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceArn') }})
    auto_scaling_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingConfigurationArn') }})
    health_check_configuration: Optional[HealthCheckConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckConfiguration') }})
    instance_configuration: Optional[InstanceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceConfiguration') }})
    source_configuration: Optional[SourceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceConfiguration') }})
    
