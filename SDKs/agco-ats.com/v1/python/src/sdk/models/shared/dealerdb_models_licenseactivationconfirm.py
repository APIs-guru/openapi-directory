from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DealerDbModelsLicenseActivationConfirm:
    license_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseVersion' }, 'form': { 'field_name': 'LicenseVersion' }})
    
