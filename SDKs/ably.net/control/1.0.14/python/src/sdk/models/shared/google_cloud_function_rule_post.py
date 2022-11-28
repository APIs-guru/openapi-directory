from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudFunctionRulePostRequestModeEnum(str, Enum):
    SINGLE = "single"
    BATCH = "batch"

class GoogleCloudFunctionRulePostRuleTypeEnum(str, Enum):
    HTTP_GOOGLE_CLOUD_FUNCTION = "http/google-cloud-function"

class GoogleCloudFunctionRulePostTargetFormatEnum(str, Enum):
    JSON = "json"


@dataclass_json
@dataclass
class GoogleCloudFunctionRulePostTargetHeaders:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class GoogleCloudFunctionRulePostTarget:
    function_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionName') }})
    project_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enveloped') }})
    format: Optional[GoogleCloudFunctionRulePostTargetFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    headers: Optional[List[GoogleCloudFunctionRulePostTargetHeaders]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    signing_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signingKeyId') }})
    

@dataclass_json
@dataclass
class GoogleCloudFunctionRulePost:
    request_mode: GoogleCloudFunctionRulePostRequestModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: GoogleCloudFunctionRulePostRuleTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: RuleSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: GoogleCloudFunctionRulePostTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
