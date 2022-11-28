from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RedshiftDestinationProperties:
    r"""RedshiftDestinationProperties
     The properties that are applied when Amazon Redshift is being used as a destination. 
    """
    
    intermediate_bucket_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('intermediateBucketName') }})
    object: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    bucket_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketPrefix') }})
    error_handling_config: Optional[ErrorHandlingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorHandlingConfig') }})
    
