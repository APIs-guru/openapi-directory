from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SvmEndpoints:
    r"""SvmEndpoints
    An Amazon FSx for NetApp ONTAP storage virtual machine (SVM) has the following endpoints that are used to access data or to manage the SVM using the NetApp ONTAP CLI, REST API, or NetApp CloudManager.
    """
    
    iscsi: Optional[SvmEndpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Iscsi') }})
    management: Optional[SvmEndpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Management') }})
    nfs: Optional[SvmEndpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Nfs') }})
    smb: Optional[SvmEndpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Smb') }})
    
