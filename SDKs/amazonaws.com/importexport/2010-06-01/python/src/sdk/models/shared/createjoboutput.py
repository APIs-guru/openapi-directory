from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class CreateJobOutput:
    r"""CreateJobOutput
    Output structure for the CreateJob operation.
    """
    
    artifact_list: Optional[List[Artifact]] = field(default=None)
    job_id: Optional[str] = field(default=None)
    job_type: Optional[JobTypeEnum] = field(default=None)
    signature: Optional[str] = field(default=None)
    signature_file_contents: Optional[str] = field(default=None)
    warning_message: Optional[str] = field(default=None)
    
