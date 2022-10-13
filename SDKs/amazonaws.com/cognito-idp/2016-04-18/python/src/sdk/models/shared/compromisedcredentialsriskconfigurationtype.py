from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import compromisedcredentialsactionstype
from . import eventfiltertype_enum


@dataclass_json
@dataclass
class CompromisedCredentialsRiskConfigurationType:
    actions: compromisedcredentialsactionstype.CompromisedCredentialsActionsType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Actions' }})
    event_filter: Optional[List[eventfiltertype_enum.EventFilterTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventFilter' }})
    
