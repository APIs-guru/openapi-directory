from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import otaupdateinfo


@dataclass_json
@dataclass
class GetOtaUpdateResponse:
    ota_update_info: Optional[otaupdateinfo.OtaUpdateInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otaUpdateInfo' }})
    
