from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tablestatistics


@dataclass_json
@dataclass
class DescribeTableStatisticsResponse:
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    replication_task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicationTaskArn' }})
    table_statistics: Optional[List[tablestatistics.TableStatistics]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableStatistics' }})
    
