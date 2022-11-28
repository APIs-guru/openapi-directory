from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VerifyTrustRequest:
    r"""VerifyTrustRequest
    Initiates the verification of an existing trust relationship between an Managed Microsoft AD directory and an external domain.
    """
    
    trust_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrustId') }})
    
