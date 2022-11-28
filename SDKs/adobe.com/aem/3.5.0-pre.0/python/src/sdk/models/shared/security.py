from dataclasses import dataclass, field



@dataclass
class SchemeAemAuth:
    password: str = field(metadata={'security': { 'field_name': 'password' }})
    username: str = field(metadata={'security': { 'field_name': 'username' }})
    

@dataclass
class Security:
    aem_auth: SchemeAemAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
