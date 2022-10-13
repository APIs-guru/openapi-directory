from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SigningProfileParameter:
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateArn' }})
    certificate_path_on_device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificatePathOnDevice' }})
    platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    
