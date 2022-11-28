from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DealerDbModelsLicenseActivationCreateLicenseActivationTypeEnum(str, Enum):
    EDT = "EDT"
    EDT_LITE = "EDTLite"


@dataclass_json
@dataclass
class DealerDbModelsLicenseActivationCreate:
    dealer_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DealerCode') }, 'form': { 'field_name': 'DealerCode' }})
    postal_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalCode') }, 'form': { 'field_name': 'PostalCode' }})
    system_info: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SystemInfo') }, 'form': { 'field_name': 'SystemInfo' }})
    voucher_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VoucherCode') }, 'form': { 'field_name': 'VoucherCode' }})
    license_activation_type: Optional[DealerDbModelsLicenseActivationCreateLicenseActivationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseActivationType') }, 'form': { 'field_name': 'LicenseActivationType' }})
    
