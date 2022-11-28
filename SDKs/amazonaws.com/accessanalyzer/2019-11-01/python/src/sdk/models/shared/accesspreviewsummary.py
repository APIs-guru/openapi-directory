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
class AccessPreviewSummary:
    r"""AccessPreviewSummary
    Contains a summary of information about an access preview.
    """
    
    analyzer_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyzerArn') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: AccessPreviewStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_reason: Optional[AccessPreviewStatusReason] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusReason') }})
    
