from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResultSetMetadata:
    r"""ResultSetMetadata
    The metadata that describes the column structure and data types of a table of query results. To return a <code>ResultSetMetadata</code> object, use <a>GetQueryResults</a>.
    """
    
    column_info: Optional[List[ColumnInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnInfo') }})
    
