from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FileMetadata:
    r"""FileMetadata
    A file to be added, updated, or deleted as part of a commit.
    """
    
    absolute_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('absolutePath') }})
    blob_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobId') }})
    file_mode: Optional[FileModeTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileMode') }})
    
