from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateSystemModelsPackage:
    crc: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CRC') }, 'form': { 'field_name': 'CRC' }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }, 'form': { 'field_name': 'Description' }})
    package_type_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PackageTypeID') }, 'form': { 'field_name': 'PackageTypeID' }})
    release_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReleaseDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'ReleaseDate' }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Url') }, 'form': { 'field_name': 'Url' }})
    version: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }, 'form': { 'field_name': 'Version' }})
    autorun: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Autorun') }, 'form': { 'field_name': 'Autorun' }})
    localized_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalizedName') }, 'form': { 'field_name': 'LocalizedName' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }, 'form': { 'field_name': 'Notes' }})
    package_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PackageID') }, 'form': { 'field_name': 'PackageID' }})
    previous_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreviousVersion') }, 'form': { 'field_name': 'PreviousVersion' }})
    released: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Released') }, 'form': { 'field_name': 'Released' }})
    remove_on_success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoveOnSuccess') }, 'form': { 'field_name': 'RemoveOnSuccess' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Size') }, 'form': { 'field_name': 'Size' }})
    switches: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Switches') }, 'form': { 'field_name': 'Switches' }})
    
