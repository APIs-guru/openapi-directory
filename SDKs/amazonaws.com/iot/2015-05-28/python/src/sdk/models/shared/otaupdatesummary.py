from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OtaUpdateSummary:
    r"""OtaUpdateSummary
    An OTA update summary.
    """
    
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ota_update_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otaUpdateArn') }})
    ota_update_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otaUpdateId') }})
    
