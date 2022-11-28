from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


GET_SERVER_HEALTH_SERVERS = [
	"http://localhost:8080",
]


@dataclass_json
@dataclass
class GetServerHealth200ApplicationJSON:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    dependencies: Optional[List[shared.ServiceDependency]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependencies') }})
    

@dataclass
class GetServerHealthRequest:
    server_url: Optional[str] = field(default=None)
    

@dataclass
class GetServerHealthResponse:
    content_type: str = field()
    status_code: int = field()
    get_server_health_200_application_json_object: Optional[GetServerHealth200ApplicationJSON] = field(default=None)
    
