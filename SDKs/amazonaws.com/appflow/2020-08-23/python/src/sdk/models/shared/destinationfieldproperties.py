from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DestinationFieldProperties:
    r"""DestinationFieldProperties
     The properties that can be applied to a field when connector is being used as a destination. 
    """
    
    is_creatable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isCreatable') }})
    is_nullable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isNullable') }})
    is_updatable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isUpdatable') }})
    is_upsertable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isUpsertable') }})
    supported_write_operations: Optional[List[WriteOperationTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedWriteOperations') }})
    
