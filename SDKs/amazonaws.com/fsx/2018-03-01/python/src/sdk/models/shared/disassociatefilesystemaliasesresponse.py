from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DisassociateFileSystemAliasesResponse:
    r"""DisassociateFileSystemAliasesResponse
    The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system. Use the API operation to monitor the status of the aliases Amazon FSx is removing from the file system.
    """
    
    aliases: Optional[List[Alias]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Aliases') }})
    
