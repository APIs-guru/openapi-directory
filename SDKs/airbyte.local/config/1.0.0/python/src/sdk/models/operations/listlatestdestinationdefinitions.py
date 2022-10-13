from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListLatestDestinationDefinitionsResponse:
    content_type: str = field(default=None)
    destination_definition_read_list: Optional[shared.DestinationDefinitionReadList] = field(default=None)
    status_code: int = field(default=None)
    
