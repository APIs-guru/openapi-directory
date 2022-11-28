from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListTemplatesResponse:
    next_token: Optional[str] = field(default=None)
    templates_metadata: Optional[List[TemplateMetadata]] = field(default=None)
    
