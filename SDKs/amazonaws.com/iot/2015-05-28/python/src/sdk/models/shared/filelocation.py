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
class FileLocation:
    r"""FileLocation
    The location of the OTA update.
    """
    
    s3_location: Optional[S3Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Location') }})
    stream: Optional[Stream] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream') }})
    
