from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import imagebuilder


@dataclass_json
@dataclass
class StopImageBuilderResult:
    image_builder: Optional[imagebuilder.ImageBuilder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageBuilder' }})
    
