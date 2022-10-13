from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import rule_source
from . import aws_access_keys
from . import aws_assume_role

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
    authentication: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authentication' }})
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enveloped' }})
    format: Optional[AwsKinesisRulePatchTargetFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    partition_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionKey' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamName' }})
    

@dataclass_json
@dataclass
class AwsKinesisRulePatch:
    request_mode: Optional[AwsKinesisRulePatchRequestModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMode' }})
    rule_type: Optional[AwsKinesisRulePatchRuleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleType' }})
    source: Optional[rule_source.RuleSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    status: Optional[AwsKinesisRulePatchStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target: Optional[AwsKinesisRulePatchTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    
