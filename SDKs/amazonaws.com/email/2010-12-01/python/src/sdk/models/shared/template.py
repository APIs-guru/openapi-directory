from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Template:
    r"""Template
    The content of the email, composed of a subject line, an HTML part, and a text-only part.
    """
    
    template_name: str = field()
    html_part: Optional[str] = field(default=None)
    subject_part: Optional[str] = field(default=None)
    text_part: Optional[str] = field(default=None)
    
