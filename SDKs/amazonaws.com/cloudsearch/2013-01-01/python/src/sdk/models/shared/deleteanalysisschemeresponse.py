from dataclasses import dataclass, field
from . import *


@dataclass
class DeleteAnalysisSchemeResponse:
    r"""DeleteAnalysisSchemeResponse
    The result of a <code>DeleteAnalysisScheme</code> request. Contains the status of the deleted analysis scheme.
    """
    
    analysis_scheme: AnalysisSchemeStatus = field()
    
