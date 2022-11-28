from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SchemaVersionNumber:
    r"""SchemaVersionNumber
    A structure containing the schema version information.
    """
    
    latest_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestVersion') }})
    version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VersionNumber') }})
    
