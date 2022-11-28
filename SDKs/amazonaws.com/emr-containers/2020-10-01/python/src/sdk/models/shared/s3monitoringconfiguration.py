from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3MonitoringConfiguration:
    r"""S3MonitoringConfiguration
     Amazon S3 configuration for monitoring log publishing. You can configure your jobs to send log information to Amazon S3.
    """
    
    log_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logUri') }})
    
