from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudFunctionRulePatchRequestModeEnum(str, Enum):
    SINGLE = "single"
    BATCH = "batch"

class GoogleCloudFunctionRulePatchRuleTypeEnum(str, Enum):
    HTTP_GOOGLE_CLOUD_FUNCTION = "http/google-cloud-function"

class GoogleCloudFunctionRulePatchStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"

class GoogleCloudFunctionRulePatchTargetFormatEnum(str, Enum):
    JSON = "json"


@dataclass_json
@dataclass
class GoogleCloudFunctionRulePatchTargetHeaders:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class GoogleCloudFunctionRulePatchTarget:
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enveloped') }})
    format: Optional[GoogleCloudFunctionRulePatchTargetFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    function_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionName') }})
    headers: Optional[List[GoogleCloudFunctionRulePatchTargetHeaders]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    signing_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signingKeyId') }})
    

@dataclass_json
@dataclass
class GoogleCloudFunctionRulePatch:
    request_mode: Optional[GoogleCloudFunctionRulePatchRequestModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: Optional[GoogleCloudFunctionRulePatchRuleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: Optional[RuleSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    status: Optional[GoogleCloudFunctionRulePatchStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    target: Optional[GoogleCloudFunctionRulePatchTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
