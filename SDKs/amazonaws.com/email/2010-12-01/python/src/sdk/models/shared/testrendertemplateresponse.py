from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TestRenderTemplateResponse:
    rendered_template: Optional[str] = field(default=None)
    
