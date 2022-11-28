from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SchemaColumn:
    r"""SchemaColumn
    A key-value pair representing a column and data type that this transform can run against. The <code>Schema</code> parameter of the <code>MLTransform</code> may contain up to 100 of these structures.
    """
    
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
