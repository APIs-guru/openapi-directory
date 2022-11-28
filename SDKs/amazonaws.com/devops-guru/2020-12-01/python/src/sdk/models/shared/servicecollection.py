from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceCollection:
    r"""ServiceCollection
    A collection of the names of AWS services.
    """
    
    service_names: Optional[List[ServiceNameEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNames') }})
    
