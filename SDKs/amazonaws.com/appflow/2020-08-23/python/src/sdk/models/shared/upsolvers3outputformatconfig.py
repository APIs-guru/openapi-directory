from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpsolverS3OutputFormatConfig:
    r"""UpsolverS3OutputFormatConfig
     The configuration that determines how Amazon AppFlow formats the flow output data when Upsolver is used as the destination. 
    """
    
    prefix_config: PrefixConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefixConfig') }})
    aggregation_config: Optional[AggregationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationConfig') }})
    file_type: Optional[FileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileType') }})
    
