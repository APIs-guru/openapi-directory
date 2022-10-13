from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import acceptancetype_enum


@dataclass_json
@dataclass
class AcceptMatchInput:
    acceptance_type: acceptancetype_enum.AcceptanceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptanceType' }})
    player_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayerIds' }})
    ticket_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TicketId' }})
    
