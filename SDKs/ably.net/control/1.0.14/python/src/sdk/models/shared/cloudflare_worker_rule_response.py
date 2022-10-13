from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import rule_source

class CloudflareWorkerRuleResponseRequestModeEnum(str, Enum):
    SINGLE = "single"
    BATCH = "batch"

class CloudflareWorkerRuleResponseRuleTypeEnum(str, Enum):
    HTTP_CLOUDFLARE_WORKER = "http/cloudflare-worker"

class CloudflareWorkerRuleResponseStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class CloudflareWorkerRuleResponseTargetHeaders:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class CloudflareWorkerRuleResponseTarget:
    headers: Optional[List[CloudflareWorkerRuleResponseTargetHeaders]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    signing_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signingKeyId' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class CloudflareWorkerRuleResponse:
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    created: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    modified: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified' }})
    request_mode: CloudflareWorkerRuleResponseRequestModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMode' }})
    rule_type: CloudflareWorkerRuleResponseRuleTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleType' }})
    source: rule_source.RuleSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    status: Optional[CloudflareWorkerRuleResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target: CloudflareWorkerRuleResponseTarget = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
