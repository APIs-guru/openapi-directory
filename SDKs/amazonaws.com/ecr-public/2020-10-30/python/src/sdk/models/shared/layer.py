from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Layer:
    r"""Layer
    An object representing an Amazon ECR image layer.
    """
    
    layer_availability: Optional[LayerAvailabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layerAvailability') }})
    layer_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layerDigest') }})
    layer_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layerSize') }})
    media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaType') }})
    
