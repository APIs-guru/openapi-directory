from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import cloudwatchloggingoptions
from . import hecendpointtype_enum
from . import processingconfiguration
from . import splunkretryoptions
from . import splunks3backupmode_enum
from . import s3destinationdescription


@dataclass_json
@dataclass
class SplunkDestinationDescription:
    cloud_watch_logging_options: Optional[cloudwatchloggingoptions.CloudWatchLoggingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLoggingOptions' }})
    hec_acknowledgment_timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HECAcknowledgmentTimeoutInSeconds' }})
    hec_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HECEndpoint' }})
    hec_endpoint_type: Optional[hecendpointtype_enum.HecEndpointTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HECEndpointType' }})
    hec_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HECToken' }})
    processing_configuration: Optional[processingconfiguration.ProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingConfiguration' }})
    retry_options: Optional[splunkretryoptions.SplunkRetryOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetryOptions' }})
    s3_backup_mode: Optional[splunks3backupmode_enum.SplunkS3BackupModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BackupMode' }})
    s3_destination_description: Optional[s3destinationdescription.S3DestinationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3DestinationDescription' }})
    
