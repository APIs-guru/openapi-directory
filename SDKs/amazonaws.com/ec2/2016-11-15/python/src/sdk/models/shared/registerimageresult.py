from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RegisterImageResult:
    r"""RegisterImageResult
    Contains the output of RegisterImage.
    """
    
    image_id: Optional[str] = field(default=None)
    
