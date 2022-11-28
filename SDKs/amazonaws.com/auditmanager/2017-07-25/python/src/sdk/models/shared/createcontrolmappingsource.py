from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateControlMappingSource:
    r"""CreateControlMappingSource
     Control mapping fields that represent the source for evidence collection, along with related parameters and metadata. This does not contain <code>mappingID</code>. 
    """
    
    source_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceDescription') }})
    source_frequency: Optional[SourceFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceFrequency') }})
    source_keyword: Optional[SourceKeyword] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceKeyword') }})
    source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceName') }})
    source_set_up_option: Optional[SourceSetUpOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceSetUpOption') }})
    source_type: Optional[SourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceType') }})
    troubleshooting_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('troubleshootingText') }})
    
