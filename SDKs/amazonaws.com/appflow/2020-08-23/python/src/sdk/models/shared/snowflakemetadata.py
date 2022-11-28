from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SnowflakeMetadata:
    r"""SnowflakeMetadata
     The connector metadata specific to Snowflake. 
    """
    
    supported_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedRegions') }})
    
