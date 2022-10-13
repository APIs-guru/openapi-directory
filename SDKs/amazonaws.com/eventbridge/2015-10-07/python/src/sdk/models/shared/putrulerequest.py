from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import rulestate_enum
from . import tag


@dataclass_json
@dataclass
class PutRuleRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    event_bus_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventBusName' }})
    event_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventPattern' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    schedule_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduleExpression' }})
    state: Optional[rulestate_enum.RuleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
