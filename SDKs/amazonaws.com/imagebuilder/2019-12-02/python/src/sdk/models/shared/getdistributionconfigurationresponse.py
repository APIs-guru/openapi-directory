from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import distributionconfiguration


@dataclass_json
@dataclass
class GetDistributionConfigurationResponse:
    distribution_configuration: Optional[distributionconfiguration.DistributionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributionConfiguration' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
