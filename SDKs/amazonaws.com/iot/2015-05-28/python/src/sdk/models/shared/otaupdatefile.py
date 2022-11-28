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
class OtaUpdateFile:
    r"""OtaUpdateFile
    Describes a file to be associated with an OTA update.
    """
    
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    code_signing: Optional[CodeSigning] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codeSigning') }})
    file_location: Optional[FileLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileLocation') }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    file_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileType') }})
    file_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileVersion') }})
    
