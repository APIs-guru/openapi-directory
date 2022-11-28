from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DisassociateFileSystemAliasesRequest:
    r"""DisassociateFileSystemAliasesRequest
    The request object of DNS aliases to disassociate from an Amazon FSx for Windows File Server file system.
    """
    
    aliases: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Aliases') }})
    file_system_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemId') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    
