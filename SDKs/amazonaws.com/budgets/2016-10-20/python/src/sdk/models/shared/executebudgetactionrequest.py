from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import executiontype_enum


@dataclass_json
@dataclass
class ExecuteBudgetActionRequest:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    action_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionId' }})
    budget_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BudgetName' }})
    execution_type: executiontype_enum.ExecutionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionType' }})
    
