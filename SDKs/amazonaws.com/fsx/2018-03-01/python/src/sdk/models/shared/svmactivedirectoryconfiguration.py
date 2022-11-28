from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SvmActiveDirectoryConfiguration:
    r"""SvmActiveDirectoryConfiguration
    Describes the configuration of the Microsoft Active Directory (AD) directory to which the Amazon FSx for ONTAP storage virtual machine (SVM) is joined. Pleae note, account credentials are not returned in the response payload.
    """
    
    net_bios_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetBiosName') }})
    self_managed_active_directory_configuration: Optional[SelfManagedActiveDirectoryAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelfManagedActiveDirectoryConfiguration') }})
    
