from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AwsSqsRulePatchRequestModeEnum(str, Enum):
    SINGLE = "single"

class AwsSqsRulePatchRuleTypeEnum(str, Enum):
    AWS_SQS = "aws/sqs"

class AwsSqsRulePatchStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class AwsSqsRulePatchTarget:
    authentication: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication') }})
    aws_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsAccountId') }})
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enveloped') }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    queue_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queueName') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    

@dataclass_json
@dataclass
class AwsSqsRulePatch:
    request_mode: Optional[AwsSqsRulePatchRequestModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: Optional[AwsSqsRulePatchRuleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: Optional[RuleSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    status: Optional[AwsSqsRulePatchStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    target: Optional[AwsSqsRulePatchTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
