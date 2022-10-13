from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import rule_source
from . import aws_access_keys
from . import aws_assume_role

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
    authentication: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authentication' }})
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enveloped' }})
    function_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functionName' }})
    region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    

@dataclass_json
@dataclass
class AwsLambdaRulePost:
    request_mode: AwsLambdaRulePostRequestModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMode' }})
    rule_type: AwsLambdaRulePostRuleTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleType' }})
    source: rule_source.RuleSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    status: Optional[AwsLambdaRulePostStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target: AwsLambdaRulePostTarget = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    
