from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OutgoingCertificate:
    r"""OutgoingCertificate
    A certificate that has been transferred but not yet accepted.
    """
    
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateArn') }})
    certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateId') }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transfer_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transfer_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferMessage') }})
    transferred_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferredTo') }})
    
