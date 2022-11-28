from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchDescribeMergeConflictsError:
    r"""BatchDescribeMergeConflictsError
    Returns information about errors in a BatchDescribeMergeConflicts operation.
    """
    
    exception_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exceptionName') }})
    file_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
