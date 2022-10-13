from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import rule_source

class CloudflareWorkerRulePatchRequestModeEnum(str, Enum):
    SINGLE = "single"
    BATCH = "batch"

class CloudflareWorkerRulePatchRuleTypeEnum(str, Enum):
    HTTP_CLOUDFLARE_WORKER = "http/cloudflare-worker"

class CloudflareWorkerRulePatchStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class CloudflareWorkerRulePatchTargetHeaders:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class CloudflareWorkerRulePatchTarget:
    headers: Optional[List[CloudflareWorkerRulePatchTargetHeaders]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    signing_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signingKeyId' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class CloudflareWorkerRulePatch:
    request_mode: Optional[CloudflareWorkerRulePatchRequestModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMode' }})
    rule_type: Optional[CloudflareWorkerRulePatchRuleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleType' }})
    source: Optional[rule_source.RuleSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    status: Optional[CloudflareWorkerRulePatchStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target: Optional[CloudflareWorkerRulePatchTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    
