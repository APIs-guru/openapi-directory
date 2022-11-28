from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class IftttRuleResponseRequestModeEnum(str, Enum):
    SINGLE = "single"

class IftttRuleResponseRuleTypeEnum(str, Enum):
    HTTP_IFTTT = "http/ifttt"

class IftttRuleResponseStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class IftttRuleResponseTarget:
    event_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventName') }})
    webhook_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookKey') }})
    

@dataclass_json
@dataclass
class IftttRuleResponse:
    request_mode: IftttRuleResponseRequestModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: IftttRuleResponseRuleTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: RuleSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: IftttRuleResponseTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    created: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    modified: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    status: Optional[IftttRuleResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
