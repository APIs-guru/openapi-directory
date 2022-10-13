from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import nfsmountoptions
from . import onpremconfig
from . import taglistentry


@dataclass_json
@dataclass
class CreateLocationNfsRequest:
    mount_options: Optional[nfsmountoptions.NfsMountOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MountOptions' }})
    on_prem_config: onpremconfig.OnPremConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnPremConfig' }})
    server_hostname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerHostname' }})
    subdirectory: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subdirectory' }})
    tags: Optional[List[taglistentry.TagListEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
