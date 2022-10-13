from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import compromisedcredentialseventactiontype_enum


@dataclass_json
@dataclass
class CompromisedCredentialsActionsType:
    event_action: compromisedcredentialseventactiontype_enum.CompromisedCredentialsEventActionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventAction' }})
    
