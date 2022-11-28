from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateSystemModelsPackageStatus:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientID') }})
    client_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientKey') }})
    download_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DownloadTime') }})
    downloaded: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Downloaded') }})
    install_completed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstallCompleted') }})
    install_result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstallResult') }})
    install_started: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstallStarted') }})
    install_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstallTime') }})
    percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Percentage') }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Size') }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
