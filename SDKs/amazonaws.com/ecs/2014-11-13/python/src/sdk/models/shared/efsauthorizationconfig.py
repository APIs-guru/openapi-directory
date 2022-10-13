from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import efsauthorizationconfigiam_enum


@dataclass_json
@dataclass
class EfsAuthorizationConfig:
    access_point_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPointId' }})
    iam: Optional[efsauthorizationconfigiam_enum.EfsAuthorizationConfigIamEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iam' }})
    
