from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class GetServiceLastAccessedDetailsWithEntitiesResponse:
    entity_details_list: List[EntityDetails] = field()
    job_completion_date: datetime = field()
    job_creation_date: datetime = field()
    job_status: JobStatusTypeEnum = field()
    error: Optional[ErrorDetails] = field(default=None)
    is_truncated: Optional[bool] = field(default=None)
    marker: Optional[str] = field(default=None)
    
