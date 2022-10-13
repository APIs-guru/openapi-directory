from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import maximumexecutionfrequency_enum
from . import organizationconfigruletriggertype_enum


@dataclass_json
@dataclass
class OrganizationCustomRuleMetadata:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    input_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputParameters' }})
    lambda_function_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LambdaFunctionArn' }})
    maximum_execution_frequency: Optional[maximumexecutionfrequency_enum.MaximumExecutionFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumExecutionFrequency' }})
    organization_config_rule_trigger_types: List[organizationconfigruletriggertype_enum.OrganizationConfigRuleTriggerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationConfigRuleTriggerTypes' }})
    resource_id_scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceIdScope' }})
    resource_types_scope: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceTypesScope' }})
    tag_key_scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagKeyScope' }})
    tag_value_scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagValueScope' }})
    
