from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateBackendAuthPasswordPolicyConfig:
    r"""UpdateBackendAuthPasswordPolicyConfig
    Describes the password policy for your Amazon Cognito user pool configured as a part of your Amplify project.
    """
    
    additional_constraints: Optional[List[AdditionalConstraintsElementEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalConstraints') }})
    minimum_length: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumLength') }})
    
