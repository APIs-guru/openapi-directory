from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AwsLambdaRulePostRequestModeEnum(str, Enum):
    SINGLE = "single"

class AwsLambdaRulePostRuleTypeEnum(str, Enum):
    AWS_LAMBDA = "aws/lambda"

class AwsLambdaRulePostStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class AwsLambdaRulePostTarget:
    authentication: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication') }})
    function_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionName') }})
    region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enveloped') }})
    

@dataclass_json
@dataclass
class AwsLambdaRulePost:
    request_mode: AwsLambdaRulePostRequestModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: AwsLambdaRulePostRuleTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: RuleSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: AwsLambdaRulePostTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    status: Optional[AwsLambdaRulePostStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
