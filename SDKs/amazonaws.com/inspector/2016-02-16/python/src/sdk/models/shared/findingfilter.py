from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FindingFilter:
    r"""FindingFilter
    This data type is used as a request parameter in the <a>ListFindings</a> action.
    """
    
    agent_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentIds') }})
    attributes: Optional[List[Attribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    auto_scaling_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroups') }})
    creation_time_range: Optional[TimestampRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTimeRange') }})
    rule_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleNames') }})
    rules_package_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rulesPackageArns') }})
    severities: Optional[List[SeverityEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severities') }})
    user_attributes: Optional[List[Attribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAttributes') }})
    
