from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dataretrievalpolicy


@dataclass_json
@dataclass
class GetDataRetrievalPolicyOutput:
    policy: Optional[dataretrievalpolicy.DataRetrievalPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Policy' }})
    
