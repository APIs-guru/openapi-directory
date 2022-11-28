from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConnectorConfigResponse:
    r"""ConnectorConfigResponse
    The full description of your connected cluster.
    """
    
    activation_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activationCode') }})
    activation_expiry: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activationExpiry'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    activation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activationId') }})
    provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    
