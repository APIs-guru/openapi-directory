from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecord:
    client_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientCount' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
