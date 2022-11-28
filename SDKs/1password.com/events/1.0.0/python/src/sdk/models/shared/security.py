from dataclasses import dataclass, field



@dataclass
class SchemeJwtsa:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
