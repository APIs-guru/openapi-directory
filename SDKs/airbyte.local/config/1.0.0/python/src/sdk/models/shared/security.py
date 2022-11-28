from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeBearerAuth:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    bearer_auth: Optional[SchemeBearerAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    
