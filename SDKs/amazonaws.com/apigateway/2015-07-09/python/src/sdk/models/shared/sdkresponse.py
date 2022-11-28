from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SDKResponse:
    r"""SDKResponse
    The binary blob response to <a>GetSdk</a>, which contains the generated SDK.
    """
    
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    
