from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ZapierRuleResponseRequestModeEnum(str, Enum):
    SINGLE = "single"
    BATCH = "batch"

class ZapierRuleResponseRuleTypeEnum(str, Enum):
    HTTP_ZAPIER = "http/zapier"

class ZapierRuleResponseStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class ZapierRuleResponseTargetHeaders:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class ZapierRuleResponseTarget:
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    headers: Optional[List[ZapierRuleResponseTargetHeaders]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    signing_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signingKeyId') }})
    

@dataclass_json
@dataclass
class ZapierRuleResponse:
    request_mode: ZapierRuleResponseRequestModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: ZapierRuleResponseRuleTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: RuleSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: ZapierRuleResponseTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    created: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    modified: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    status: Optional[ZapierRuleResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
