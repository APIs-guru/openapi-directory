from dataclasses import dataclass, field



@dataclass
class SchemeAemAuth:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    aem_auth: SchemeAemAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
