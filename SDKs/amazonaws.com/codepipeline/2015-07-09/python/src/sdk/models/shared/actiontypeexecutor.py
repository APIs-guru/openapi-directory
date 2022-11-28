from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActionTypeExecutor:
    r"""ActionTypeExecutor
    The action engine, or executor, for an action type created for a provider, where the action is to be used by customers of the provider. The action engine is associated with the model used to create and update the action, such as the Lambda integration model.
    """
    
    configuration: ExecutorConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    type: ExecutorTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    job_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobTimeout') }})
    policy_statements_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyStatementsTemplate') }})
    
