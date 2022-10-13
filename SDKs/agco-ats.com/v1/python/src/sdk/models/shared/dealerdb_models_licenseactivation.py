from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DealerDbModelsLicenseActivation:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    license_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseData' }})
    
