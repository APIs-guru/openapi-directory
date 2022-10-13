from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PlayReadyDrm:
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Format' }})
    initialization_vector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InitializationVector' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    key_md5: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyMd5' }})
    license_acquisition_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseAcquisitionUrl' }})
    
