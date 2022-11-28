from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class HTTPRulePostRequestModeEnum(str, Enum):
    SINGLE = "single"
    BATCH = "batch"

class HTTPRulePostRuleTypeEnum(str, Enum):
    HTTP = "http"

class HTTPRulePostStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"

class HTTPRulePostTargetFormatEnum(str, Enum):
    JSON = "json"
    MSGPACK = "msgpack"


@dataclass_json
@dataclass
class HTTPRulePostTargetHeaders:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class HTTPRulePostTarget:
    format: HTTPRulePostTargetFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enveloped') }})
    headers: Optional[List[HTTPRulePostTargetHeaders]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    signing_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signingKeyId') }})
    

@dataclass_json
@dataclass
class HTTPRulePost:
    request_mode: HTTPRulePostRequestModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: HTTPRulePostRuleTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: RuleSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: HTTPRulePostTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    status: Optional[HTTPRulePostStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
