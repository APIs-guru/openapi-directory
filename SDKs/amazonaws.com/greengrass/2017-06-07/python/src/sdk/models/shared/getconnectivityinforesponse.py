from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import connectivityinfo


@dataclass_json
@dataclass
class GetConnectivityInfoResponse:
    connectivity_info: Optional[List[connectivityinfo.ConnectivityInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectivityInfo' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    
