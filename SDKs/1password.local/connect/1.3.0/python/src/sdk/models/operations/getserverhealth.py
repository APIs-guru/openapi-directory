from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
GET_SERVER_HEALTH_SERVERS = [
	"http://localhost:8080",
]


@dataclass
class GetServerHealthRequest:
    server_url: Optional[str] = field(default=None)
    

@dataclass_json
@dataclass
class GetServerHealth200ApplicationJSON:
    dependencies: Optional[List[shared.ServiceDependency]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dependencies' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass
class GetServerHealthResponse:
    content_type: str = field(default=None)
    get_server_health_200_application_json_object: Optional[GetServerHealth200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
