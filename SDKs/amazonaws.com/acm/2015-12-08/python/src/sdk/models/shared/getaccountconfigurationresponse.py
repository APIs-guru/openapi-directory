from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import expiryeventsconfiguration


@dataclass_json
@dataclass
class GetAccountConfigurationResponse:
    expiry_events: Optional[expiryeventsconfiguration.ExpiryEventsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpiryEvents' }})
    
