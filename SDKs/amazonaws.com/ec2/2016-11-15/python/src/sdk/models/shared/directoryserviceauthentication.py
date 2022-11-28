from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DirectoryServiceAuthentication:
    r"""DirectoryServiceAuthentication
    Describes an Active Directory.
    """
    
    directory_id: Optional[str] = field(default=None)
    
