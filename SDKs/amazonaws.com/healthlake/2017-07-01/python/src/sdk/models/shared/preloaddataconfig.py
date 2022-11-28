from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PreloadDataConfig:
    r"""PreloadDataConfig
     The input properties for the preloaded Data Store. Only data preloaded from Synthea is supported.
    """
    
    preload_data_type: PreloadDataTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreloadDataType') }})
    
