from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FunctionConfiguration:
    r"""FunctionConfiguration
    A function is a reusable entity. Multiple functions can be used to compose the resolver logic.
    """
    
    data_source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    function_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionArn') }})
    function_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionId') }})
    function_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionVersion') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    request_mapping_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMappingTemplate') }})
    response_mapping_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseMappingTemplate') }})
    sync_config: Optional[SyncConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncConfig') }})
    
