from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EndpointDetails:
    r"""EndpointDetails
    Information about the endpoint details.
    """
    
    endpoint: Optional[DataflowEndpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    security_details: Optional[SecurityDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityDetails') }})
    
