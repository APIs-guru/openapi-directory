from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteFileEntry:
    r"""DeleteFileEntry
    A file that is deleted as part of a commit.
    """
    
    file_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    
