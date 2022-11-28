from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CodeDeliveryDetailsType:
    r"""CodeDeliveryDetailsType
    The code delivery details being returned from the server.
    """
    
    attribute_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeName') }})
    delivery_medium: Optional[DeliveryMediumTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryMedium') }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    
