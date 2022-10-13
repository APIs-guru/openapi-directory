from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tunnelsummary


@dataclass_json
@dataclass
class ListTunnelsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    tunnel_summaries: Optional[List[tunnelsummary.TunnelSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tunnelSummaries' }})
    
