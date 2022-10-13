from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import rule_source
from . import aws_access_keys
from . import aws_assume_role

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
    authentication: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authentication' }})
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enveloped' }})
    format: AwsKinesisRulePostTargetFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    partition_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionKey' }})
    region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamName' }})
    

@dataclass_json
@dataclass
class AwsKinesisRulePost:
    request_mode: AwsKinesisRulePostRequestModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMode' }})
    rule_type: AwsKinesisRulePostRuleTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleType' }})
    source: rule_source.RuleSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    status: Optional[AwsKinesisRulePostStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target: AwsKinesisRulePostTarget = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    
