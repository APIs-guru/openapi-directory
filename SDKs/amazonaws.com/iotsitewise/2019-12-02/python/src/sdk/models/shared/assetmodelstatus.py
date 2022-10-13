from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import errordetails
from . import assetmodelstate_enum


@dataclass_json
@dataclass
class AssetModelStatus:
    error: Optional[errordetails.ErrorDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    state: assetmodelstate_enum.AssetModelStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
