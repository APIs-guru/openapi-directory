from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateSystemModelsPriorityPackage:
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientID') }, 'form': { 'field_name': 'ClientID' }})
    package_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PackageID') }, 'form': { 'field_name': 'PackageID' }})
    autorun: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Autorun') }, 'form': { 'field_name': 'Autorun' }})
    crc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CRC') }, 'form': { 'field_name': 'CRC' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }, 'form': { 'field_name': 'Description' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }, 'form': { 'field_name': 'Notes' }})
    package_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PackageTypeID') }, 'form': { 'field_name': 'PackageTypeID' }})
    previous_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreviousVersion') }, 'form': { 'field_name': 'PreviousVersion' }})
    priority_package_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PriorityPackageID') }, 'form': { 'field_name': 'PriorityPackageID' }})
    release_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReleaseDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'ReleaseDate' }})
    released: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Released') }, 'form': { 'field_name': 'Released' }})
    remove_on_success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoveOnSuccess') }, 'form': { 'field_name': 'RemoveOnSuccess' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Size') }, 'form': { 'field_name': 'Size' }})
    switches: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Switches') }, 'form': { 'field_name': 'Switches' }})
    time_stamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeStamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'TimeStamp' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Url') }, 'form': { 'field_name': 'Url' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }, 'form': { 'field_name': 'Version' }})
    
