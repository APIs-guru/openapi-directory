from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import rule_source

class GoogleCloudFunctionRuleResponseRequestModeEnum(str, Enum):
    SINGLE = "single"
    BATCH = "batch"

class GoogleCloudFunctionRuleResponseRuleTypeEnum(str, Enum):
    HTTP_GOOGLE_CLOUD_FUNCTION = "http/google-cloud-function"

class GoogleCloudFunctionRuleResponseStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"

class GoogleCloudFunctionRuleResponseTargetFormatEnum(str, Enum):
    JSON = "json"


@dataclass_json
@dataclass
class GoogleCloudFunctionRuleResponseTargetHeaders:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class GoogleCloudFunctionRuleResponseTarget:
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enveloped' }})
    format: Optional[GoogleCloudFunctionRuleResponseTargetFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    function_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functionName' }})
    headers: Optional[List[GoogleCloudFunctionRuleResponseTargetHeaders]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    project_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    signing_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signingKeyId' }})
    

@dataclass_json
@dataclass
class GoogleCloudFunctionRuleResponse:
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    created: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    modified: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified' }})
    request_mode: GoogleCloudFunctionRuleResponseRequestModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMode' }})
    rule_type: GoogleCloudFunctionRuleResponseRuleTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleType' }})
    source: rule_source.RuleSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    status: Optional[GoogleCloudFunctionRuleResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target: GoogleCloudFunctionRuleResponseTarget = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
