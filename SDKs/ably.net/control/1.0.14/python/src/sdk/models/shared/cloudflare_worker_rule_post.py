from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class CloudflareWorkerRulePostTarget:
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    headers: Optional[List[CloudflareWorkerRulePostTargetHeaders]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    signing_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signingKeyId') }})
    

@dataclass_json
@dataclass
class CloudflareWorkerRulePost:
    request_mode: CloudflareWorkerRulePostRequestModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: CloudflareWorkerRulePostRuleTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: RuleSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: CloudflareWorkerRulePostTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    status: Optional[CloudflareWorkerRulePostStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
