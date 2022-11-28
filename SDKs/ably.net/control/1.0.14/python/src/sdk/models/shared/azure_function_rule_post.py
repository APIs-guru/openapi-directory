from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AzureFunctionRulePostRequestModeEnum(str, Enum):
    SINGLE = "single"
    BATCH = "batch"

class AzureFunctionRulePostRuleTypeEnum(str, Enum):
    HTTP_AZURE_FUNCTION = "http/azure-function"

class AzureFunctionRulePostStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"

class AzureFunctionRulePostTargetFormatEnum(str, Enum):
    JSON = "json"


@dataclass_json
@dataclass
class AzureFunctionRulePostTargetHeaders:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class AzureFunctionRulePostTarget:
    azure_app_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('azureAppId') }})
    azure_function_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('azureFunctionName') }})
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enveloped') }})
    format: Optional[AzureFunctionRulePostTargetFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    headers: Optional[List[AzureFunctionRulePostTargetHeaders]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    signing_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signingKeyId') }})
    

@dataclass_json
@dataclass
class AzureFunctionRulePost:
    request_mode: AzureFunctionRulePostRequestModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: AzureFunctionRulePostRuleTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: RuleSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: AzureFunctionRulePostTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    status: Optional[AzureFunctionRulePostStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
