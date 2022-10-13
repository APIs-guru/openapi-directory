from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EdiPartyName:
    name_assigner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NameAssigner' }})
    party_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartyName' }})
    
