from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import percentpair


@dataclass_json
@dataclass
class GetPercentilesResponse:
    percentiles: Optional[List[percentpair.PercentPair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentiles' }})
    
