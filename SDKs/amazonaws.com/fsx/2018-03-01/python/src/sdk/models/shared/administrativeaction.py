from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AdministrativeAction:
    r"""AdministrativeAction
    Describes a specific Amazon FSx administrative action for the current Windows or Lustre file system.
    """
    
    administrative_action_type: Optional[AdministrativeActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdministrativeActionType') }})
    failure_details: Optional[AdministrativeActionFailureDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureDetails') }})
    progress_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProgressPercent') }})
    request_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    target_file_system_values: Optional[FileSystem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetFileSystemValues') }})
    target_volume_values: Optional[Volume] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetVolumeValues') }})
    
