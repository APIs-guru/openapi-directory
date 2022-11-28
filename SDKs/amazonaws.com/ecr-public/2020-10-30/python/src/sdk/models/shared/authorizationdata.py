from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AuthorizationData:
    r"""AuthorizationData
    An authorization token data object that corresponds to a public registry.
    """
    
    authorization_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationToken') }})
    expires_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiresAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
