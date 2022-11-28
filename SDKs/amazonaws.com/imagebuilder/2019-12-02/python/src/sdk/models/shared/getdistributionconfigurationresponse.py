from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDistributionConfigurationResponse:
    distribution_configuration: Optional[DistributionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributionConfiguration') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
