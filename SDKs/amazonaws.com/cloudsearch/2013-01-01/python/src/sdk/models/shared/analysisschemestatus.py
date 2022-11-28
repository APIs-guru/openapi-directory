from dataclasses import dataclass, field
from . import *


@dataclass
class AnalysisSchemeStatus:
    r"""AnalysisSchemeStatus
    The status and configuration of an <code>AnalysisScheme</code>.
    """
    
    options: AnalysisScheme = field()
    status: OptionStatus = field()
    
