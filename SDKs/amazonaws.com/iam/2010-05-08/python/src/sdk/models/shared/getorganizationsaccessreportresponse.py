from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class GetOrganizationsAccessReportResponse:
    job_creation_date: datetime = field()
    job_status: JobStatusTypeEnum = field()
    access_details: Optional[List[AccessDetail]] = field(default=None)
    error_details: Optional[ErrorDetails] = field(default=None)
    is_truncated: Optional[bool] = field(default=None)
    job_completion_date: Optional[datetime] = field(default=None)
    marker: Optional[str] = field(default=None)
    number_of_services_accessible: Optional[int] = field(default=None)
    number_of_services_not_accessed: Optional[int] = field(default=None)
    
