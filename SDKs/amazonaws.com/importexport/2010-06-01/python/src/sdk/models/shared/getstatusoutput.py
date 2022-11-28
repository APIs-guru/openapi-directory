from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class GetStatusOutput:
    r"""GetStatusOutput
    Output structure for the GetStatus operation.
    """
    
    artifact_list: Optional[List[Artifact]] = field(default=None)
    carrier: Optional[str] = field(default=None)
    creation_date: Optional[datetime] = field(default=None)
    current_manifest: Optional[str] = field(default=None)
    error_count: Optional[int] = field(default=None)
    job_id: Optional[str] = field(default=None)
    job_type: Optional[JobTypeEnum] = field(default=None)
    location_code: Optional[str] = field(default=None)
    location_message: Optional[str] = field(default=None)
    log_bucket: Optional[str] = field(default=None)
    log_key: Optional[str] = field(default=None)
    progress_code: Optional[str] = field(default=None)
    progress_message: Optional[str] = field(default=None)
    signature: Optional[str] = field(default=None)
    signature_file_contents: Optional[str] = field(default=None)
    tracking_number: Optional[str] = field(default=None)
    
