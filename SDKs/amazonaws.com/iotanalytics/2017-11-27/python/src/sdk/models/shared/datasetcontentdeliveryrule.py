from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DatasetContentDeliveryRule:
    r"""DatasetContentDeliveryRule
    When dataset contents are created, they are delivered to destination specified here.
    """
    
    destination: DatasetContentDeliveryDestination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    entry_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryName') }})
    
