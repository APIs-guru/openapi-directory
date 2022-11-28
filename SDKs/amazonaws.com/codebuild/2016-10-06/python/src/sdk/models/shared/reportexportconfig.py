from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportExportConfig:
    r"""ReportExportConfig
     Information about the location where the run of a report is exported. 
    """
    
    export_config_type: Optional[ReportExportConfigTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportConfigType') }})
    s3_destination: Optional[S3ReportExportConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Destination') }})
    
