from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DealerDbModelsLicenseLicenseActivationTypeEnum(str, Enum):
    EDT = "EDT"
    EDT_LITE = "EDTLite"


@dataclass_json
@dataclass
class DealerDbModelsLicense:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Active') }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deactivated_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeactivatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    license_activation_type: Optional[DealerDbModelsLicenseLicenseActivationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseActivationType') }})
    license_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseID') }})
    license_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseVersion') }})
    refresh_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RefreshDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    system_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SystemInfo') }})
    updated_license_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedLicenseVersion') }})
    voucher_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VoucherCode') }})
    
