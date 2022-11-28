from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class APIPagedResponseUpdateSystemModelsUpdateGroup:
    r"""APIPagedResponseUpdateSystemModelsUpdateGroup
    A response containing a page of results and metadata concerning the results
    """
    
    entities: List[UpdateSystemModelsUpdateGroup] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entities') }})
    metadata: APIPagedResponseMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Metadata') }})
    
