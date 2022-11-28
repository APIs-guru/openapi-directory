from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class S3OutputFormatConfig:
    r"""S3OutputFormatConfig
     The configuration that determines how Amazon AppFlow should format the flow output data when Amazon S3 is used as the destination. 
    """
    
    aggregation_config: Optional[AggregationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationConfig') }})
    file_type: Optional[FileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileType') }})
    prefix_config: Optional[PrefixConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefixConfig') }})
    
