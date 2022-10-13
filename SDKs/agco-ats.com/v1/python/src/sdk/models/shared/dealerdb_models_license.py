from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DealerDbModelsLicenseLicenseActivationTypeEnum(str, Enum):
    EDT = "EDT"
    EDT_LITE = "EDTLite"


@dataclass_json
@dataclass
class DealerDbModelsLicense:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Active' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deactivated_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeactivatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    license_activation_type: Optional[DealerDbModelsLicenseLicenseActivationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseActivationType' }})
    license_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseID' }})
    license_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseVersion' }})
    refresh_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RefreshDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    system_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SystemInfo' }})
    updated_license_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedLicenseVersion' }})
    voucher_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoucherCode' }})
    
