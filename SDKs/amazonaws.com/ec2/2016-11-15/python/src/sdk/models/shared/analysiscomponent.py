from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AnalysisComponent:
    r"""AnalysisComponent
    Describes a path component.
    """
    
    arn: Optional[str] = field(default=None)
    id: Optional[str] = field(default=None)
    
