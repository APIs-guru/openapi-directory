from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import rule_source
from . import aws_access_keys
from . import aws_assume_role

class AwsSqsRulePostRequestModeEnum(str, Enum):
    SINGLE = "single"

class AwsSqsRulePostRuleTypeEnum(str, Enum):
    AWS_SQS = "aws/sqs"

class AwsSqsRulePostStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class AwsSqsRulePostTarget:
    authentication: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authentication' }})
    aws_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsAccountId' }})
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enveloped' }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    queue_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queueName' }})
    region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    

@dataclass_json
@dataclass
class AwsSqsRulePost:
    request_mode: AwsSqsRulePostRequestModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMode' }})
    rule_type: AwsSqsRulePostRuleTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleType' }})
    source: rule_source.RuleSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    status: Optional[AwsSqsRulePostStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target: AwsSqsRulePostTarget = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    
