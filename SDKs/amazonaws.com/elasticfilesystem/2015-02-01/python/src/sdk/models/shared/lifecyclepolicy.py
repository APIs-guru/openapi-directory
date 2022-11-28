from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LifecyclePolicy:
    r"""LifecyclePolicy
    Describes a policy used by EFS lifecycle management to transition files to the Infrequent Access (IA) storage class.
    """
    
    transition_to_ia: Optional[TransitionToIaRulesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransitionToIA') }})
    transition_to_primary_storage_class: Optional[TransitionToPrimaryStorageClassRulesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransitionToPrimaryStorageClass') }})
    
