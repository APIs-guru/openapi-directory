from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateBackendAuthIdentityPoolConfig:
    r"""UpdateBackendAuthIdentityPoolConfig
    Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
    """
    
    unauthenticated_login: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnauthenticatedLogin') }})
    
