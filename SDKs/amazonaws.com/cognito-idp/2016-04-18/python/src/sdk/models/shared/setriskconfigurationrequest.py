from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SetRiskConfigurationRequest:
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    account_takeover_risk_configuration: Optional[AccountTakeoverRiskConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountTakeoverRiskConfiguration') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientId') }})
    compromised_credentials_risk_configuration: Optional[CompromisedCredentialsRiskConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompromisedCredentialsRiskConfiguration') }})
    risk_exception_configuration: Optional[RiskExceptionConfigurationType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RiskExceptionConfiguration') }})
    
