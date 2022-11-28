from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class HTTPRulePatchRequestModeEnum(str, Enum):
    SINGLE = "single"
    BATCH = "batch"

class HTTPRulePatchRuleTypeEnum(str, Enum):
    HTTP = "http"

class HTTPRulePatchStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"

class HTTPRulePatchTargetFormatEnum(str, Enum):
    JSON = "json"
    MSGPACK = "msgpack"


@dataclass_json
@dataclass
class HTTPRulePatchTargetHeaders:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class HTTPRulePatchTarget:
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enveloped') }})
    format: Optional[HTTPRulePatchTargetFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    headers: Optional[List[HTTPRulePatchTargetHeaders]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    signing_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signingKeyId') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class HTTPRulePatch:
    request_mode: Optional[HTTPRulePatchRequestModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: Optional[HTTPRulePatchRuleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: Optional[RuleSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    status: Optional[HTTPRulePatchStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    target: Optional[HTTPRulePatchTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
