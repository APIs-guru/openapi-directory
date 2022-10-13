from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import connectorprofile


@dataclass_json
@dataclass
class DescribeConnectorProfilesResponse:
    connector_profile_details: Optional[List[connectorprofile.ConnectorProfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorProfileDetails' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
