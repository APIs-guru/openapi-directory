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
class PrefixConfig:
    r"""PrefixConfig
     Determines the prefix that Amazon AppFlow applies to the destination folder name. You can name your destination folders according to the flow frequency and date. 
    """
    
    prefix_format: Optional[PrefixFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefixFormat') }})
    prefix_type: Optional[PrefixTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefixType') }})
    
