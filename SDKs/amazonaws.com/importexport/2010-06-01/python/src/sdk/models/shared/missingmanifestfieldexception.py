from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MissingManifestFieldException:
    r"""MissingManifestFieldException
    One or more required fields were missing from the manifest file. Please correct and resubmit.
    """
    
    message: Optional[str] = field(default=None)
    
