from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SelfManagedActiveDirectoryAttributes:
    r"""SelfManagedActiveDirectoryAttributes
    The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.
    """
    
    dns_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsIps') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    file_system_administrators_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemAdministratorsGroup') }})
    organizational_unit_distinguished_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationalUnitDistinguishedName') }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    
