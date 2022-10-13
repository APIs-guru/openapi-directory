from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import httpendpointbufferinghints
from . import cloudwatchloggingoptions
from . import httpendpointconfiguration
from . import processingconfiguration
from . import httpendpointrequestconfiguration
from . import httpendpointretryoptions
from . import httpendpoints3backupmode_enum
from . import s3destinationconfiguration


@dataclass_json
@dataclass
class HTTPEndpointDestinationConfiguration:
    buffering_hints: Optional[httpendpointbufferinghints.HTTPEndpointBufferingHints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BufferingHints' }})
    cloud_watch_logging_options: Optional[cloudwatchloggingoptions.CloudWatchLoggingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLoggingOptions' }})
    endpoint_configuration: httpendpointconfiguration.HTTPEndpointConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointConfiguration' }})
    processing_configuration: Optional[processingconfiguration.ProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingConfiguration' }})
    request_configuration: Optional[httpendpointrequestconfiguration.HTTPEndpointRequestConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestConfiguration' }})
    retry_options: Optional[httpendpointretryoptions.HTTPEndpointRetryOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetryOptions' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARN' }})
    s3_backup_mode: Optional[httpendpoints3backupmode_enum.HTTPEndpointS3BackupModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BackupMode' }})
    s3_configuration: s3destinationconfiguration.S3DestinationConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Configuration' }})
    
