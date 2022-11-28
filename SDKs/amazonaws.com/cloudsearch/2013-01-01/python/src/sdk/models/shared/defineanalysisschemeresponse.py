from dataclasses import dataclass, field
from . import *


@dataclass
class DefineAnalysisSchemeResponse:
    r"""DefineAnalysisSchemeResponse
    The result of a <code><a>DefineAnalysisScheme</a></code> request. Contains the status of the newly-configured analysis scheme.
    """
    
    analysis_scheme: AnalysisSchemeStatus = field()
    
