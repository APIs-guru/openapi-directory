from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import rule_source

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
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ZapierRuleResponseTarget:
    headers: Optional[List[ZapierRuleResponseTargetHeaders]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    signing_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signingKeyId' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ZapierRuleResponse:
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    created: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    modified: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified' }})
    request_mode: ZapierRuleResponseRequestModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMode' }})
    rule_type: ZapierRuleResponseRuleTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleType' }})
    source: rule_source.RuleSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    status: Optional[ZapierRuleResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target: ZapierRuleResponseTarget = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
