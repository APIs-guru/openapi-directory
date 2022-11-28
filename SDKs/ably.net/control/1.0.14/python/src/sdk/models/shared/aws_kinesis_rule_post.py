from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AwsKinesisRulePostRequestModeEnum(str, Enum):
    SINGLE = "single"

class AwsKinesisRulePostRuleTypeEnum(str, Enum):
    AWS_KINESIS = "aws/kinesis"

class AwsKinesisRulePostStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"

class AwsKinesisRulePostTargetFormatEnum(str, Enum):
    JSON = "json"


@dataclass_json
@dataclass
class AwsKinesisRulePostTarget:
    authentication: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication') }})
    format: AwsKinesisRulePostTargetFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    partition_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitionKey') }})
    region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamName') }})
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enveloped') }})
    

@dataclass_json
@dataclass
class AwsKinesisRulePost:
    request_mode: AwsKinesisRulePostRequestModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: AwsKinesisRulePostRuleTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: RuleSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: AwsKinesisRulePostTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    status: Optional[AwsKinesisRulePostStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
