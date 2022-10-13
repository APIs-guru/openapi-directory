from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import timeunitstype_enum
from . import timeunitstype_enum
from . import timeunitstype_enum


@dataclass_json
@dataclass
class TokenValidityUnitsType:
    access_token: Optional[timeunitstype_enum.TimeUnitsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessToken' }})
    id_token: Optional[timeunitstype_enum.TimeUnitsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdToken' }})
    refresh_token: Optional[timeunitstype_enum.TimeUnitsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RefreshToken' }})
    
