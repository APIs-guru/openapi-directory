from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Certificate:
    r"""Certificate
    An object representing the <code>certificate-authority-data</code> for your cluster.
    """
    
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
