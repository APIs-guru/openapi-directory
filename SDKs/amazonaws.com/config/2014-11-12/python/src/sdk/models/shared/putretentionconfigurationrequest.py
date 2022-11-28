from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PutRetentionConfigurationRequest:
    retention_period_in_days: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetentionPeriodInDays') }})
    
