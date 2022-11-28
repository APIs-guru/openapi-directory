from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteVolumeOntapResponse:
    r"""DeleteVolumeOntapResponse
    The response object for the Amazon FSx for NetApp ONTAP volume being deleted in the <code>DeleteVolume</code> operation.
    """
    
    final_backup_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalBackupId') }})
    final_backup_tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalBackupTags') }})
    
