from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class UpdateJobOutput:
    r"""UpdateJobOutput
    Output structure for the UpateJob operation.
    """
    
    artifact_list: Optional[List[Artifact]] = field(default=None)
    success: Optional[bool] = field(default=None)
    warning_message: Optional[str] = field(default=None)
    
