from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import globalsecondaryindexinfo
from . import localsecondaryindexinfo
from . import ssedescription
from . import streamspecification
from . import timetolivedescription


@dataclass_json
@dataclass
class SourceTableFeatureDetails:
    global_secondary_indexes: Optional[List[globalsecondaryindexinfo.GlobalSecondaryIndexInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalSecondaryIndexes' }})
    local_secondary_indexes: Optional[List[localsecondaryindexinfo.LocalSecondaryIndexInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalSecondaryIndexes' }})
    sse_description: Optional[ssedescription.SseDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SSEDescription' }})
    stream_description: Optional[streamspecification.StreamSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamDescription' }})
    time_to_live_description: Optional[timetolivedescription.TimeToLiveDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeToLiveDescription' }})
    
