from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteInfrastructureConfigurationResponse:
    infrastructure_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infrastructureConfigurationArn' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
