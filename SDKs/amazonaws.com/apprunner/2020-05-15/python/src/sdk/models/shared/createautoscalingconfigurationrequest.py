from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateAutoScalingConfigurationRequest:
    auto_scaling_configuration_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingConfigurationName' }})
    max_concurrency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxConcurrency' }})
    max_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxSize' }})
    min_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinSize' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
