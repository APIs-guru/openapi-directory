from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DealerDbModelsLicenseActivationUpdate:
    license_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseVersion') }, 'form': { 'field_name': 'LicenseVersion' }})
    system_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SystemInfo') }, 'form': { 'field_name': 'SystemInfo' }})
    
