from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import rule_source

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
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class UnsupportedRuleResponse:
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    created: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    modified: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified' }})
    request_mode: UnsupportedRuleResponseRequestModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMode' }})
    rule_type: UnsupportedRuleResponseRuleTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleType' }})
    source: rule_source.RuleSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    status: Optional[UnsupportedRuleResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target: UnsupportedRuleResponseTarget = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
