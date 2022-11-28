from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListDestinationDefinitionsResponse:
    content_type: str = field()
    status_code: int = field()
    destination_definition_read_list: Optional[shared.DestinationDefinitionReadList] = field(default=None)
    
