from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SelfManagedActiveDirectoryConfiguration:
    dns_ips: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsIps' }})
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    file_system_administrators_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemAdministratorsGroup' }})
    organizational_unit_distinguished_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationalUnitDistinguishedName' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    user_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserName' }})
    
