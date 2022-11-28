from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SsmActionDefinition:
    r"""SsmActionDefinition
     The AWS Systems Manager (SSM) action definition details. 
    """
    
    action_sub_type: ActionSubTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionSubType') }})
    instance_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceIds') }})
    region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Region') }})
    
