from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BackupDescription:
    r"""BackupDescription
    Contains the description of the backup created for the table.
    """
    
    backup_details: Optional[BackupDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupDetails') }})
    source_table_details: Optional[SourceTableDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceTableDetails') }})
    source_table_feature_details: Optional[SourceTableFeatureDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceTableFeatureDetails') }})
    
