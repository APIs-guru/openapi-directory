from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssociateFileSystemAliasesResponse:
    r"""AssociateFileSystemAliasesResponse
    The system generated response showing the DNS aliases that Amazon FSx is attempting to associate with the file system. Use the API operation to monitor the status of the aliases Amazon FSx is associating with the file system. It can take up to 2.5 minutes for the alias status to change from <code>CREATING</code> to <code>AVAILABLE</code>. 
    """
    
    aliases: Optional[List[Alias]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Aliases') }})
    
