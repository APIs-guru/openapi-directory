from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrganizationCustomRuleMetadata:
    r"""OrganizationCustomRuleMetadata
    An object that specifies organization custom rule metadata such as resource type, resource ID of Amazon Web Services resource, Lambda function ARN, and organization trigger types that trigger Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.
    """
    
    lambda_function_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaFunctionArn') }})
    organization_config_rule_trigger_types: List[OrganizationConfigRuleTriggerTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationConfigRuleTriggerTypes') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    input_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputParameters') }})
    maximum_execution_frequency: Optional[MaximumExecutionFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumExecutionFrequency') }})
    resource_id_scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceIdScope') }})
    resource_types_scope: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceTypesScope') }})
    tag_key_scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagKeyScope') }})
    tag_value_scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagValueScope') }})
    
