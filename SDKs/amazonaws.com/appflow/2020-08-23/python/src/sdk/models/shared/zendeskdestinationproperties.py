from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ZendeskDestinationProperties:
    r"""ZendeskDestinationProperties
    The properties that are applied when Zendesk is used as a destination.
    """
    
    object: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    error_handling_config: Optional[ErrorHandlingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorHandlingConfig') }})
    id_field_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idFieldNames') }})
    write_operation_type: Optional[WriteOperationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeOperationType') }})
    
