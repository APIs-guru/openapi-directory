from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import cloudwatchloggingoptions
from . import hecendpointtype_enum
from . import processingconfiguration
from . import splunkretryoptions
from . import splunks3backupmode_enum
from . import s3destinationconfiguration


@dataclass_json
@dataclass
class SplunkDestinationConfiguration:
    cloud_watch_logging_options: Optional[cloudwatchloggingoptions.CloudWatchLoggingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLoggingOptions' }})
    hec_acknowledgment_timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HECAcknowledgmentTimeoutInSeconds' }})
    hec_endpoint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HECEndpoint' }})
    hec_endpoint_type: hecendpointtype_enum.HecEndpointTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HECEndpointType' }})
    hec_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HECToken' }})
    processing_configuration: Optional[processingconfiguration.ProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingConfiguration' }})
    retry_options: Optional[splunkretryoptions.SplunkRetryOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetryOptions' }})
    s3_backup_mode: Optional[splunks3backupmode_enum.SplunkS3BackupModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BackupMode' }})
    s3_configuration: s3destinationconfiguration.S3DestinationConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Configuration' }})
    
