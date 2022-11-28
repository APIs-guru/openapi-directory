from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SplunkDestinationDescription:
    r"""SplunkDestinationDescription
    Describes a destination in Splunk.
    """
    
    cloud_watch_logging_options: Optional[CloudWatchLoggingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    hec_acknowledgment_timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HECAcknowledgmentTimeoutInSeconds') }})
    hec_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HECEndpoint') }})
    hec_endpoint_type: Optional[HecEndpointTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HECEndpointType') }})
    hec_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HECToken') }})
    processing_configuration: Optional[ProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingConfiguration') }})
    retry_options: Optional[SplunkRetryOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryOptions') }})
    s3_backup_mode: Optional[SplunkS3BackupModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupMode') }})
    s3_destination_description: Optional[S3DestinationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3DestinationDescription') }})
    
