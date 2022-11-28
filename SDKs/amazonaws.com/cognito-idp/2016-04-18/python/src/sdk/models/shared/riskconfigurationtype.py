from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RiskConfigurationType:
    r"""RiskConfigurationType
    The risk configuration type.
    """
    
    account_takeover_risk_configuration: Optional[AccountTakeoverRiskConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountTakeoverRiskConfiguration') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientId') }})
    compromised_credentials_risk_configuration: Optional[CompromisedCredentialsRiskConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompromisedCredentialsRiskConfiguration') }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    risk_exception_configuration: Optional[RiskExceptionConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RiskExceptionConfiguration') }})
    user_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    
