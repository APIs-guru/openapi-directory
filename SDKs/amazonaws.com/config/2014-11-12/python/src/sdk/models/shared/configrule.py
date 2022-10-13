from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import configrulestate_enum
from . import maximumexecutionfrequency_enum
from . import scope
from . import source


@dataclass_json
@dataclass
class ConfigRule:
    config_rule_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigRuleArn' }})
    config_rule_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigRuleId' }})
    config_rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigRuleName' }})
    config_rule_state: Optional[configrulestate_enum.ConfigRuleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigRuleState' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBy' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    input_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputParameters' }})
    maximum_execution_frequency: Optional[maximumexecutionfrequency_enum.MaximumExecutionFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumExecutionFrequency' }})
    scope: Optional[scope.Scope] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Scope' }})
    source: source.Source = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    
