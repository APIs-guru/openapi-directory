from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import svmendpoint
from . import svmendpoint
from . import svmendpoint
from . import svmendpoint


@dataclass_json
@dataclass
class SvmEndpoints:
    iscsi: Optional[svmendpoint.SvmEndpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Iscsi' }})
    management: Optional[svmendpoint.SvmEndpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Management' }})
    nfs: Optional[svmendpoint.SvmEndpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Nfs' }})
    smb: Optional[svmendpoint.SvmEndpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Smb' }})
    
