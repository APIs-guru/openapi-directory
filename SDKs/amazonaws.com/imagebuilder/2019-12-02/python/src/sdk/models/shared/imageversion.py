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
class ImageVersion:
    r"""ImageVersion
    The defining characteristics of a specific version of an Image Builder image.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osVersion') }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    platform: Optional[PlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    type: Optional[ImageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
