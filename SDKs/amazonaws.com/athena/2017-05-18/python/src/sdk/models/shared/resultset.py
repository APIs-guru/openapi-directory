from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResultSet:
    r"""ResultSet
    The metadata and rows that comprise a query result set. The metadata describes the column structure and data types. To return a <code>ResultSet</code> object, use <a>GetQueryResults</a>.
    """
    
    result_set_metadata: Optional[ResultSetMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultSetMetadata') }})
    rows: Optional[List[Row]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rows') }})
    
