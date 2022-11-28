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
class PutFileEntry:
    r"""PutFileEntry
    Information about a file added or updated as part of a commit.
    """
    
    file_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    file_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileContent') }})
    file_mode: Optional[FileModeTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileMode') }})
    source_file: Optional[SourceFileSpecifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceFile') }})
    
