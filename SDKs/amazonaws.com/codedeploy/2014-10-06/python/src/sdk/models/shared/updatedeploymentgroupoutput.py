from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateDeploymentGroupOutput:
    r"""UpdateDeploymentGroupOutput
    Represents the output of an <code>UpdateDeploymentGroup</code> operation.
    """
    
    hooks_not_cleaned_up: Optional[List[AutoScalingGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hooksNotCleanedUp') }})
    
