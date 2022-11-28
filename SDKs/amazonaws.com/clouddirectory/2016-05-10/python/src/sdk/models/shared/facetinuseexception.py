from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FacetInUseException:
    r"""FacetInUseException
    Occurs when deleting a facet that contains an attribute that is a target to an attribute reference in a different facet.
    """
    
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
