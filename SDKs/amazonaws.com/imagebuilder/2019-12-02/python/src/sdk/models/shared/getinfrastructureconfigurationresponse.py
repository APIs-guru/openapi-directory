from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import infrastructureconfiguration


@dataclass_json
@dataclass
class GetInfrastructureConfigurationResponse:
    infrastructure_configuration: Optional[infrastructureconfiguration.InfrastructureConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infrastructureConfiguration' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
