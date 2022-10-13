from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BulkDeploymentMetrics:
    invalid_input_records: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvalidInputRecords' }})
    records_processed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordsProcessed' }})
    retry_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetryAttempts' }})
    
