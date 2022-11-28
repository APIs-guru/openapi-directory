from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CertificateValidity:
    r"""CertificateValidity
    When the certificate is valid.
    """
    
    not_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notAfter'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    not_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notBefore'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
