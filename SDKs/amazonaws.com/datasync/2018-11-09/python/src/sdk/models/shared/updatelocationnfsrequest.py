from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import nfsmountoptions
from . import onpremconfig


@dataclass_json
@dataclass
class UpdateLocationNfsRequest:
    location_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocationArn' }})
    mount_options: Optional[nfsmountoptions.NfsMountOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MountOptions' }})
    on_prem_config: Optional[onpremconfig.OnPremConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnPremConfig' }})
    subdirectory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subdirectory' }})
    
