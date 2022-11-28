from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListSourceDefinitionsResponse:
    content_type: str = field()
    status_code: int = field()
    source_definition_read_list: Optional[shared.SourceDefinitionReadList] = field(default=None)
    
