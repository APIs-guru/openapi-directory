from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ErrorHandlingConfig:
    r"""ErrorHandlingConfig
     The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details. 
    """
    
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    bucket_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketPrefix') }})
    fail_on_first_destination_error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failOnFirstDestinationError') }})
    
