from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class QueryExecutionStatistics:
    r"""QueryExecutionStatistics
    The amount of data scanned during the query execution and the amount of time that it took to execute, and the type of statement that was run.
    """
    
    data_manifest_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataManifestLocation') }})
    data_scanned_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataScannedInBytes') }})
    engine_execution_time_in_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineExecutionTimeInMillis') }})
    query_planning_time_in_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryPlanningTimeInMillis') }})
    query_queue_time_in_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryQueueTimeInMillis') }})
    service_processing_time_in_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceProcessingTimeInMillis') }})
    total_execution_time_in_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalExecutionTimeInMillis') }})
    
