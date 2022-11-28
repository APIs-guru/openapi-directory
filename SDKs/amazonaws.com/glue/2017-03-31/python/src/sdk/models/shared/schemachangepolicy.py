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
class SchemaChangePolicy:
    r"""SchemaChangePolicy
    A policy that specifies update and deletion behaviors for the crawler.
    """
    
    delete_behavior: Optional[DeleteBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteBehavior') }})
    update_behavior: Optional[UpdateBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateBehavior') }})
    
