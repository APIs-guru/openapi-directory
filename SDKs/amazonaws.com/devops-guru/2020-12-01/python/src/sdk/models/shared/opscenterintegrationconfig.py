from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import optinstatus_enum


@dataclass_json
@dataclass
class OpsCenterIntegrationConfig:
    opt_in_status: Optional[optinstatus_enum.OptInStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OptInStatus' }})
    
