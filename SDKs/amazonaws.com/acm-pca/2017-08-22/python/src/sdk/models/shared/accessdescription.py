from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccessDescription:
    r"""AccessDescription
    Provides access information used by the <code>authorityInfoAccess</code> and <code>subjectInfoAccess</code> extensions described in <a href=\"https://tools.ietf.org/html/rfc5280\">RFC 5280</a>.
    """
    
    access_location: GeneralName = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessLocation') }})
    access_method: AccessMethod = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessMethod') }})
    
