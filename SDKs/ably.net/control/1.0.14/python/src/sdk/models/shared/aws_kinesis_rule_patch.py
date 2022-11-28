from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AwsKinesisRulePatchRequestModeEnum(str, Enum):
    SINGLE = "single"

class AwsKinesisRulePatchRuleTypeEnum(str, Enum):
    AWS_KINESIS = "aws/kinesis"

class AwsKinesisRulePatchStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"

class AwsKinesisRulePatchTargetFormatEnum(str, Enum):
    JSON = "json"


@dataclass_json
@dataclass
class AwsKinesisRulePatchTarget:
    authentication: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication') }})
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enveloped') }})
    format: Optional[AwsKinesisRulePatchTargetFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    partition_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitionKey') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamName') }})
    

@dataclass_json
@dataclass
class AwsKinesisRulePatch:
    request_mode: Optional[AwsKinesisRulePatchRequestModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: Optional[AwsKinesisRulePatchRuleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: Optional[RuleSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    status: Optional[AwsKinesisRulePatchStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    target: Optional[AwsKinesisRulePatchTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
