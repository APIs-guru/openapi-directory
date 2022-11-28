from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LocalVolumeResourceData:
    r"""LocalVolumeResourceData
    Attributes that define a local volume resource.
    """
    
    destination_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationPath') }})
    group_owner_setting: Optional[GroupOwnerSetting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupOwnerSetting') }})
    source_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourcePath') }})
    
