from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CompletionReport:
    r"""CompletionReport
    Provides a report detailing the data repository task results of the files processed that match the criteria specified in the report <code>Scope</code> parameter. FSx delivers the report to the file system's linked data repository in Amazon S3, using the path specified in the report <code>Path</code> parameter. You can specify whether or not a report gets generated for a task using the <code>Enabled</code> parameter.
    """
    
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    format: Optional[ReportFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Format') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Path') }})
    scope: Optional[ReportScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Scope') }})
    
