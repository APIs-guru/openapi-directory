from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateSvmActiveDirectoryConfiguration:
    r"""CreateSvmActiveDirectoryConfiguration
    The configuration that Amazon FSx uses to join the ONTAP storage virtual machine (SVM) to your self-managed (including on-premises) Microsoft Active Directory (AD) directory.
    """
    
    net_bios_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetBiosName') }})
    self_managed_active_directory_configuration: Optional[SelfManagedActiveDirectoryConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelfManagedActiveDirectoryConfiguration') }})
    
