from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidFileSystemException:
    r"""InvalidFileSystemException
    File system specified in export manifest is invalid.
    """
    
    message: Optional[str] = field(default=None)
    
