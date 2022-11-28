from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeTableStatisticsResponse:
    r"""DescribeTableStatisticsResponse
    <p/>
    """
    
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    replication_task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskArn') }})
    table_statistics: Optional[List[TableStatistics]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableStatistics') }})
    
