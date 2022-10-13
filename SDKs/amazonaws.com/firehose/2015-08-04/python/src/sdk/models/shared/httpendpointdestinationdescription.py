from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import httpendpointbufferinghints
from . import cloudwatchloggingoptions
from . import httpendpointdescription
from . import processingconfiguration
from . import httpendpointrequestconfiguration
from . import httpendpointretryoptions
from . import httpendpoints3backupmode_enum
from . import s3destinationdescription


@dataclass_json
@dataclass
class HTTPEndpointDestinationDescription:
    buffering_hints: Optional[httpendpointbufferinghints.HTTPEndpointBufferingHints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BufferingHints' }})
    cloud_watch_logging_options: Optional[cloudwatchloggingoptions.CloudWatchLoggingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLoggingOptions' }})
    endpoint_configuration: Optional[httpendpointdescription.HTTPEndpointDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointConfiguration' }})
    processing_configuration: Optional[processingconfiguration.ProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingConfiguration' }})
    request_configuration: Optional[httpendpointrequestconfiguration.HTTPEndpointRequestConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestConfiguration' }})
    retry_options: Optional[httpendpointretryoptions.HTTPEndpointRetryOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetryOptions' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARN' }})
    s3_backup_mode: Optional[httpendpoints3backupmode_enum.HTTPEndpointS3BackupModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BackupMode' }})
    s3_destination_description: Optional[s3destinationdescription.S3DestinationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3DestinationDescription' }})
    
