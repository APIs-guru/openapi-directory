from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListLatestSourceDefinitionsResponse:
    content_type: str = field(default=None)
    source_definition_read_list: Optional[shared.SourceDefinitionReadList] = field(default=None)
    status_code: int = field(default=None)
    
