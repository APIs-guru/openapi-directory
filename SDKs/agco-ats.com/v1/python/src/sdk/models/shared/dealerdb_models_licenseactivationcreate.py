from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DealerDbModelsLicenseActivationCreateLicenseActivationTypeEnum(str, Enum):
    EDT = "EDT"
    EDT_LITE = "EDTLite"


@dataclass_json
@dataclass
class DealerDbModelsLicenseActivationCreate:
    dealer_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DealerCode' }, 'form': { 'field_name': 'DealerCode' }})
    license_activation_type: Optional[DealerDbModelsLicenseActivationCreateLicenseActivationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseActivationType' }, 'form': { 'field_name': 'LicenseActivationType' }})
    postal_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostalCode' }, 'form': { 'field_name': 'PostalCode' }})
    system_info: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SystemInfo' }, 'form': { 'field_name': 'SystemInfo' }})
    voucher_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoucherCode' }, 'form': { 'field_name': 'VoucherCode' }})
    
