from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DealerDbModelsLicenseActivationConfirm:
    license_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseVersion') }, 'form': { 'field_name': 'LicenseVersion' }})
    
