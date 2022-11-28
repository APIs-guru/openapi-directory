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
class SseDescription:
    r"""SseDescription
    The description of the server-side encryption status on the specified table.
    """
    
    inaccessible_encryption_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InaccessibleEncryptionDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    kms_master_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KMSMasterKeyArn') }})
    sse_type: Optional[SseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SSEType') }})
    status: Optional[SseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
