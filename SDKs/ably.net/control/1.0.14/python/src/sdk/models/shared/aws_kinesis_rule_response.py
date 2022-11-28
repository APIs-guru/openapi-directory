from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AwsKinesisRuleResponseRequestModeEnum(str, Enum):
    SINGLE = "single"

class AwsKinesisRuleResponseRuleTypeEnum(str, Enum):
    AWS_KINESIS = "aws/kinesis"

class AwsKinesisRuleResponseStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"

class AwsKinesisRuleResponseTargetFormatEnum(str, Enum):
    JSON = "json"


@dataclass_json
@dataclass
class AwsKinesisRuleResponseTarget:
    authentication: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication') }})
    format: AwsKinesisRuleResponseTargetFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    partition_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitionKey') }})
    region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamName') }})
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enveloped') }})
    

@dataclass_json
@dataclass
class AwsKinesisRuleResponse:
    request_mode: AwsKinesisRuleResponseRequestModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: AwsKinesisRuleResponseRuleTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: RuleSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: AwsKinesisRuleResponseTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    created: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    modified: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    status: Optional[AwsKinesisRuleResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
