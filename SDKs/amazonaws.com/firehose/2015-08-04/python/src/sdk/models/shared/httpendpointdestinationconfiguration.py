from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HTTPEndpointDestinationConfiguration:
    r"""HTTPEndpointDestinationConfiguration
    Describes the configuration of the HTTP endpoint destination.
    """
    
    endpoint_configuration: HTTPEndpointConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointConfiguration') }})
    s3_configuration: S3DestinationConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Configuration') }})
    buffering_hints: Optional[HTTPEndpointBufferingHints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BufferingHints') }})
    cloud_watch_logging_options: Optional[CloudWatchLoggingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    processing_configuration: Optional[ProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingConfiguration') }})
    request_configuration: Optional[HTTPEndpointRequestConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestConfiguration') }})
    retry_options: Optional[HTTPEndpointRetryOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryOptions') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    s3_backup_mode: Optional[HTTPEndpointS3BackupModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupMode') }})
    
