from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DealerDbModelsLicenseActivationUpdate:
    license_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseVersion' }, 'form': { 'field_name': 'LicenseVersion' }})
    system_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SystemInfo' }, 'form': { 'field_name': 'SystemInfo' }})
    
