from dataclasses import dataclass, field
from typing import List
from . import *


@dataclass
class DescribeAnalysisSchemesResponse:
    r"""DescribeAnalysisSchemesResponse
    The result of a <code>DescribeAnalysisSchemes</code> request. Contains the analysis schemes configured for the domain specified in the request.
    """
    
    analysis_schemes: List[AnalysisSchemeStatus] = field()
    
