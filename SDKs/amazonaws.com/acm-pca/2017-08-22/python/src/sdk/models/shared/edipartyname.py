from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EdiPartyName:
    r"""EdiPartyName
    Describes an Electronic Data Interchange (EDI) entity as described in as defined in <a href=\"https://tools.ietf.org/html/rfc5280\">Subject Alternative Name</a> in RFC 5280.
    """
    
    party_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartyName') }})
    name_assigner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NameAssigner') }})
    
