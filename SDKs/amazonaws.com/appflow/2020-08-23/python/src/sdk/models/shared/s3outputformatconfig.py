from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import aggregationconfig
from . import filetype_enum
from . import prefixconfig


@dataclass_json
@dataclass
class S3OutputFormatConfig:
    aggregation_config: Optional[aggregationconfig.AggregationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregationConfig' }})
    file_type: Optional[filetype_enum.FileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileType' }})
    prefix_config: Optional[prefixconfig.PrefixConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefixConfig' }})
    
