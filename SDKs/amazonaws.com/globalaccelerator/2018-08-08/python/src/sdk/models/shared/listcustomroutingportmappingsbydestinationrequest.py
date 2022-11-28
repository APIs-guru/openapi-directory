from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListCustomRoutingPortMappingsByDestinationRequest:
    destination_address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationAddress') }})
    endpoint_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointId') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
