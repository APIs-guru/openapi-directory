from dataclasses import dataclass, field



@dataclass
class SchemeJwtsa:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
