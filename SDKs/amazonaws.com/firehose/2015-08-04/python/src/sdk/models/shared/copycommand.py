from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CopyCommand:
    r"""CopyCommand
    Describes a <code>COPY</code> command for Amazon Redshift.
    """
    
    data_table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataTableName') }})
    copy_options: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyOptions') }})
    data_table_columns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataTableColumns') }})
    
