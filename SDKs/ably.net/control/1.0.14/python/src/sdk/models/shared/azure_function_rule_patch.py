from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AzureFunctionRulePatchRequestModeEnum(str, Enum):
    SINGLE = "single"
    BATCH = "batch"

class AzureFunctionRulePatchRuleTypeEnum(str, Enum):
    HTTP_AZURE_FUNCTION = "http/azure-function"

class AzureFunctionRulePatchStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"

class AzureFunctionRulePatchTargetFormatEnum(str, Enum):
    JSON = "json"


@dataclass_json
@dataclass
class AzureFunctionRulePatchTargetHeaders:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class AzureFunctionRulePatchTarget:
    azure_app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('azureAppId') }})
    azure_function_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('azureFunctionName') }})
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enveloped') }})
    format: Optional[AzureFunctionRulePatchTargetFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    headers: Optional[List[AzureFunctionRulePatchTargetHeaders]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    signing_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signingKeyId') }})
    

@dataclass_json
@dataclass
class AzureFunctionRulePatch:
    request_mode: Optional[AzureFunctionRulePatchRequestModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: Optional[AzureFunctionRulePatchRuleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: Optional[RuleSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    status: Optional[AzureFunctionRulePatchStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    target: Optional[AzureFunctionRulePatchTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
