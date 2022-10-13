from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import thresholdtype_enum


@dataclass_json
@dataclass
class ActionThreshold:
    action_threshold_type: thresholdtype_enum.ThresholdTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionThresholdType' }})
    action_threshold_value: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionThresholdValue' }})
    
