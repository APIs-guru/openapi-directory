from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import rule_source

class CloudflareWorkerRulePostRequestModeEnum(str, Enum):
    SINGLE = "single"
    BATCH = "batch"

class CloudflareWorkerRulePostRuleTypeEnum(str, Enum):
    HTTP_CLOUDFLARE_WORKER = "http/cloudflare-worker"

class CloudflareWorkerRulePostStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class CloudflareWorkerRulePostTargetHeaders:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class CloudflareWorkerRulePostTarget:
    headers: Optional[List[CloudflareWorkerRulePostTargetHeaders]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    signing_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signingKeyId' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class CloudflareWorkerRulePost:
    request_mode: CloudflareWorkerRulePostRequestModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMode' }})
    rule_type: CloudflareWorkerRulePostRuleTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleType' }})
    source: rule_source.RuleSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    status: Optional[CloudflareWorkerRulePostStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target: CloudflareWorkerRulePostTarget = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    
