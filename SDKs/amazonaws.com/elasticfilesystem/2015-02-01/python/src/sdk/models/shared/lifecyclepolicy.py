from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import transitiontoiarules_enum
from . import transitiontoprimarystorageclassrules_enum


@dataclass_json
@dataclass
class LifecyclePolicy:
    transition_to_ia: Optional[transitiontoiarules_enum.TransitionToIaRulesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransitionToIA' }})
    transition_to_primary_storage_class: Optional[transitiontoprimarystorageclassrules_enum.TransitionToPrimaryStorageClassRulesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransitionToPrimaryStorageClass' }})
    
