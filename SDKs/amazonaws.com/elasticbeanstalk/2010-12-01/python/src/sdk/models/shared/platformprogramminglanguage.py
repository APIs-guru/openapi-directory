from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PlatformProgrammingLanguage:
    r"""PlatformProgrammingLanguage
    A programming language supported by the platform.
    """
    
    name: Optional[str] = field(default=None)
    version: Optional[str] = field(default=None)
    
