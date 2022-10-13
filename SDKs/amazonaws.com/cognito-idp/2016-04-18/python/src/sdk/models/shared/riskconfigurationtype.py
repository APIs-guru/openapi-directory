from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import accounttakeoverriskconfigurationtype
from . import compromisedcredentialsriskconfigurationtype
from . import riskexceptionconfigurationtype


@dataclass_json
@dataclass
class RiskConfigurationType:
    account_takeover_risk_configuration: Optional[accounttakeoverriskconfigurationtype.AccountTakeoverRiskConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountTakeoverRiskConfiguration' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientId' }})
    compromised_credentials_risk_configuration: Optional[compromisedcredentialsriskconfigurationtype.CompromisedCredentialsRiskConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompromisedCredentialsRiskConfiguration' }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    risk_exception_configuration: Optional[riskexceptionconfigurationtype.RiskExceptionConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RiskExceptionConfiguration' }})
    user_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    
