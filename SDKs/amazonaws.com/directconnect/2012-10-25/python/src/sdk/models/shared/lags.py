from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lag


@dataclass_json
@dataclass
class Lags:
    lags: Optional[List[lag.Lag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lags' }})
    
