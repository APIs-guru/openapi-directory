from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import asseterrorcode_enum


@dataclass_json
@dataclass
class AssetErrorDetails:
    asset_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetId' }})
    code: asseterrorcode_enum.AssetErrorCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
