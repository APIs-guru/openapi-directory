from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AwsSqsRuleResponseRequestModeEnum(str, Enum):
    SINGLE = "single"

class AwsSqsRuleResponseRuleTypeEnum(str, Enum):
    AWS_SQS = "aws/sqs"

class AwsSqsRuleResponseStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class AwsSqsRuleResponseTarget:
    authentication: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication') }})
    aws_account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsAccountId') }})
    queue_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('queueName') }})
    region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enveloped') }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    

@dataclass_json
@dataclass
class AwsSqsRuleResponse:
    request_mode: AwsSqsRuleResponseRequestModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: AwsSqsRuleResponseRuleTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: RuleSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: AwsSqsRuleResponseTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    created: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    modified: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    status: Optional[AwsSqsRuleResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
