from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateFileSystemResponse:
    r"""UpdateFileSystemResponse
    The response object for the <code>UpdateFileSystem</code> operation.
    """
    
    file_system: Optional[FileSystem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystem') }})
    
