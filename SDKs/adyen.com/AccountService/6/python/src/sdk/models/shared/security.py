from dataclasses import dataclass, field



@dataclass
class SchemeBasicAuth:
    password: str = field(metadata={'security': { 'field_name': 'password' }})
    username: str = field(metadata={'security': { 'field_name': 'username' }})
    

@dataclass
class SchemeAPIKeyAuth:
    api_key: str = field(metadata={'security': { 'field_name': 'X-API-Key' }})
    
