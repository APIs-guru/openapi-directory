from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceTableFeatureDetails:
    r"""SourceTableFeatureDetails
    Contains the details of the features enabled on the table when the backup was created. For example, LSIs, GSIs, streams, TTL. 
    """
    
    global_secondary_indexes: Optional[List[GlobalSecondaryIndexInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalSecondaryIndexes') }})
    local_secondary_indexes: Optional[List[LocalSecondaryIndexInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalSecondaryIndexes') }})
    sse_description: Optional[SseDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SSEDescription') }})
    stream_description: Optional[StreamSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamDescription') }})
    time_to_live_description: Optional[TimeToLiveDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeToLiveDescription') }})
    
