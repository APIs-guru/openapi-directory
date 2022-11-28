from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SelfManagedActiveDirectoryConfiguration:
    r"""SelfManagedActiveDirectoryConfiguration
    The configuration that Amazon FSx uses to join a Amazon FSx for Windows File Server file system or an ONTAP storage virtual machine (SVM) to a self-managed (including on-premises) Microsoft Active Directory (AD) directory. For more information, see <a href=\"https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html\"> Using Amazon FSx with your self-managed Microsoft Active Directory</a> or <a href=\"https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html\">Managing SVMs</a>.
    """
    
    dns_ips: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsIps') }})
    domain_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    user_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    file_system_administrators_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemAdministratorsGroup') }})
    organizational_unit_distinguished_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationalUnitDistinguishedName') }})
    
