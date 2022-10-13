from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import rule_source
from . import aws_access_keys_response
from . import aws_assume_role

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
    authentication: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authentication' }})
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enveloped' }})
    format: AwsKinesisRuleResponseTargetFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    partition_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionKey' }})
    region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamName' }})
    

@dataclass_json
@dataclass
class AwsKinesisRuleResponse:
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    created: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    modified: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified' }})
    request_mode: AwsKinesisRuleResponseRequestModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMode' }})
    rule_type: AwsKinesisRuleResponseRuleTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleType' }})
    source: rule_source.RuleSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    status: Optional[AwsKinesisRuleResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target: AwsKinesisRuleResponseTarget = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
