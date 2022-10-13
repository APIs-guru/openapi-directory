from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HlsContentProtection:
    initialization_vector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InitializationVector' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    key_md5: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyMd5' }})
    key_storage_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyStoragePolicy' }})
    license_acquisition_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseAcquisitionUrl' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Method' }})
    
