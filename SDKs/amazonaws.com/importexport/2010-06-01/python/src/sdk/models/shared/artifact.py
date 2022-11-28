from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Artifact:
    r"""Artifact
    A discrete item that contains the description and URL of an artifact (such as a PDF).
    """
    
    description: Optional[str] = field(default=None)
    url: Optional[str] = field(default=None)
    
