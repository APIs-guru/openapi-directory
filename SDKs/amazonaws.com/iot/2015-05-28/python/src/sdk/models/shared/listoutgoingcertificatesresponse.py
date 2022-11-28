from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListOutgoingCertificatesResponse:
    r"""ListOutgoingCertificatesResponse
    The output from the ListOutgoingCertificates operation.
    """
    
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextMarker') }})
    outgoing_certificates: Optional[List[OutgoingCertificate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outgoingCertificates') }})
    
