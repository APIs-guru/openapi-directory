from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class GetCredentialReportResponse:
    r"""GetCredentialReportResponse
    Contains the response to a successful <a>GetCredentialReport</a> request. 
    """
    
    content: Optional[str] = field(default=None)
    generated_time: Optional[datetime] = field(default=None)
    report_format: Optional[ReportFormatTypeEnum] = field(default=None)
    
