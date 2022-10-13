from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import offering


@dataclass_json
@dataclass
class ListOfferingsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    offerings: Optional[List[offering.Offering]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerings' }})
    
