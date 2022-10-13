from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import errordetails
from . import assetstate_enum


@dataclass_json
@dataclass
class AssetStatus:
    error: Optional[errordetails.ErrorDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    state: assetstate_enum.AssetStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
