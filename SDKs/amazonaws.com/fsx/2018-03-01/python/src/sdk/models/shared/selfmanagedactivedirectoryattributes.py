from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SelfManagedActiveDirectoryAttributes:
    dns_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsIps' }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    file_system_administrators_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemAdministratorsGroup' }})
    organizational_unit_distinguished_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationalUnitDistinguishedName' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserName' }})
    
