from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import rulestate_enum


@dataclass_json
@dataclass
class DescribeRuleResponse:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBy' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    event_bus_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventBusName' }})
    event_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventPattern' }})
    managed_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ManagedBy' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    schedule_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduleExpression' }})
    state: Optional[rulestate_enum.RuleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
