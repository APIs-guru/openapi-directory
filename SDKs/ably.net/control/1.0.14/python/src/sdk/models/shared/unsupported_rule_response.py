from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class UnsupportedRuleResponseRequestModeEnum(str, Enum):
    SINGLE = "single"
    BATCH = "batch"

class UnsupportedRuleResponseRuleTypeEnum(str, Enum):
    UNSUPPORTED = "unsupported"

class UnsupportedRuleResponseStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class UnsupportedRuleResponseTarget:
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class UnsupportedRuleResponse:
    request_mode: UnsupportedRuleResponseRequestModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: UnsupportedRuleResponseRuleTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: RuleSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: UnsupportedRuleResponseTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    created: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    modified: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    status: Optional[UnsupportedRuleResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
