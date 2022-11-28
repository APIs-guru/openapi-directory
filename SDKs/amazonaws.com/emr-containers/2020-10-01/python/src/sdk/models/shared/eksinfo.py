from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EksInfo:
    r"""EksInfo
    The information about the EKS cluster.
    """
    
    namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespace') }})
    
