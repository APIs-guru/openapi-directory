from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HTTPEndpointDestinationUpdate:
    r"""HTTPEndpointDestinationUpdate
    Updates the specified HTTP endpoint destination.
    """
    
    buffering_hints: Optional[HTTPEndpointBufferingHints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BufferingHints') }})
    cloud_watch_logging_options: Optional[CloudWatchLoggingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    endpoint_configuration: Optional[HTTPEndpointConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointConfiguration') }})
    processing_configuration: Optional[ProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingConfiguration') }})
    request_configuration: Optional[HTTPEndpointRequestConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestConfiguration') }})
    retry_options: Optional[HTTPEndpointRetryOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryOptions') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    s3_backup_mode: Optional[HTTPEndpointS3BackupModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupMode') }})
    s3_update: Optional[S3DestinationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Update') }})
    
