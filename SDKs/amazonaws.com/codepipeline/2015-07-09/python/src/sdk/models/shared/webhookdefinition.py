from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WebhookDefinition:
    r"""WebhookDefinition
    Represents information about a webhook and its definition.
    """
    
    authentication: WebhookAuthenticationTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication') }})
    authentication_configuration: WebhookAuthConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationConfiguration') }})
    filters: List[WebhookFilterRule] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    target_action: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetAction') }})
    target_pipeline: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetPipeline') }})
    
