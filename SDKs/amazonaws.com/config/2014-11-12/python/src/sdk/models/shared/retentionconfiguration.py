from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RetentionConfiguration:
    r"""RetentionConfiguration
    An object with the name of the retention configuration and the retention period in days. The object stores the configuration for data retention in Config.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    retention_period_in_days: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetentionPeriodInDays') }})
    
