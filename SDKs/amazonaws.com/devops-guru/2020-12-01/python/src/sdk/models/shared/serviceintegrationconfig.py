from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import opscenterintegration


@dataclass_json
@dataclass
class ServiceIntegrationConfig:
    ops_center: Optional[opscenterintegration.OpsCenterIntegration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpsCenter' }})
    
