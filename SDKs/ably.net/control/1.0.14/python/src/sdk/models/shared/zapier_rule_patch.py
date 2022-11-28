from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ZapierRulePatchRequestModeEnum(str, Enum):
    SINGLE = "single"
    BATCH = "batch"

class ZapierRulePatchRuleTypeEnum(str, Enum):
    HTTP_ZAPIER = "http/zapier"

class ZapierRulePatchStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class ZapierRulePatchTargetHeaders:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class ZapierRulePatchTarget:
    headers: Optional[List[ZapierRulePatchTargetHeaders]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    signing_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signingKeyId') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ZapierRulePatch:
    request_mode: Optional[ZapierRulePatchRequestModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: Optional[ZapierRulePatchRuleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: Optional[RuleSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    status: Optional[ZapierRulePatchStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    target: Optional[ZapierRulePatchTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
