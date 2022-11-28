from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AntennaDemodDecodeDetails:
    r"""AntennaDemodDecodeDetails
    Details about an antenna demod decode <code>Config</code> used in a contact.
    """
    
    output_node: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputNode') }})
    
