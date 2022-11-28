from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataRepositoryConfiguration:
    r"""DataRepositoryConfiguration
    The data repository configuration object for Lustre file systems returned in the response of the <code>CreateFileSystem</code> operation.
    """
    
    auto_import_policy: Optional[AutoImportPolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoImportPolicy') }})
    export_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExportPath') }})
    failure_details: Optional[DataRepositoryFailureDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureDetails') }})
    import_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportPath') }})
    imported_file_chunk_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportedFileChunkSize') }})
    lifecycle: Optional[DataRepositoryLifecycleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Lifecycle') }})
    
