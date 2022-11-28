from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CopyImageResult:
    r"""CopyImageResult
    Contains the output of CopyImage.
    """
    
    image_id: Optional[str] = field(default=None)
    
