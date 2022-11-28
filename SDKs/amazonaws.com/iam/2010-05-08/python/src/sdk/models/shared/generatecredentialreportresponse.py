from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class GenerateCredentialReportResponse:
    r"""GenerateCredentialReportResponse
    Contains the response to a successful <a>GenerateCredentialReport</a> request. 
    """
    
    description: Optional[str] = field(default=None)
    state: Optional[ReportStateTypeEnum] = field(default=None)
    
