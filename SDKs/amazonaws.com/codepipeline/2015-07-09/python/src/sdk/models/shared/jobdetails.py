from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import jobdata


@dataclass_json
@dataclass
class JobDetails:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    data: Optional[jobdata.JobData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
