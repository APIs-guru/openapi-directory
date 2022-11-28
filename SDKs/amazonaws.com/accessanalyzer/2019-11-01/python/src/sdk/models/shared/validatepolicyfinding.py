from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ValidatePolicyFinding:
    r"""ValidatePolicyFinding
    A finding in a policy. Each finding is an actionable recommendation that can be used to improve the policy.
    """
    
    finding_details: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingDetails') }})
    finding_type: ValidatePolicyFindingTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingType') }})
    issue_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueCode') }})
    learn_more_link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('learnMoreLink') }})
    locations: List[Location] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    
