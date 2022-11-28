from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HTTPEndpointDestinationDescription:
    r"""HTTPEndpointDestinationDescription
    Describes the HTTP endpoint destination.
    """
    
    buffering_hints: Optional[HTTPEndpointBufferingHints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BufferingHints') }})
    cloud_watch_logging_options: Optional[CloudWatchLoggingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    endpoint_configuration: Optional[HTTPEndpointDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointConfiguration') }})
    processing_configuration: Optional[ProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingConfiguration') }})
    request_configuration: Optional[HTTPEndpointRequestConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestConfiguration') }})
    retry_options: Optional[HTTPEndpointRetryOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryOptions') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    s3_backup_mode: Optional[HTTPEndpointS3BackupModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupMode') }})
    s3_destination_description: Optional[S3DestinationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3DestinationDescription') }})
    
