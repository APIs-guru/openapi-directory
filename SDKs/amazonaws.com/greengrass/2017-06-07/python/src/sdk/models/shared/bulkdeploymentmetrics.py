from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BulkDeploymentMetrics:
    r"""BulkDeploymentMetrics
    Relevant metrics on input records processed during bulk deployment.
    """
    
    invalid_input_records: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvalidInputRecords') }})
    records_processed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordsProcessed') }})
    retry_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryAttempts') }})
    
