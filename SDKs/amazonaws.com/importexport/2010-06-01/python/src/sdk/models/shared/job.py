from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class Job:
    r"""Job
    Representation of a job returned by the ListJobs operation.
    """
    
    creation_date: Optional[datetime] = field(default=None)
    is_canceled: Optional[bool] = field(default=None)
    job_id: Optional[str] = field(default=None)
    job_type: Optional[JobTypeEnum] = field(default=None)
    
