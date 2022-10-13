from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import attribute
from . import timestamprange
from . import severity_enum
from . import attribute


@dataclass_json
@dataclass
class FindingFilter:
    agent_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentIds' }})
    attributes: Optional[List[attribute.Attribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    auto_scaling_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoScalingGroups' }})
    creation_time_range: Optional[timestamprange.TimestampRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTimeRange' }})
    rule_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleNames' }})
    rules_package_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rulesPackageArns' }})
    severities: Optional[List[severity_enum.SeverityEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severities' }})
    user_attributes: Optional[List[attribute.Attribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAttributes' }})
    
