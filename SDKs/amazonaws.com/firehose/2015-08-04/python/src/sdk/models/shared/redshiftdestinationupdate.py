from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import cloudwatchloggingoptions
from . import copycommand
from . import processingconfiguration
from . import redshiftretryoptions
from . import redshifts3backupmode_enum
from . import s3destinationupdate
from . import s3destinationupdate


@dataclass_json
@dataclass
class RedshiftDestinationUpdate:
    cloud_watch_logging_options: Optional[cloudwatchloggingoptions.CloudWatchLoggingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLoggingOptions' }})
    cluster_jdbcurl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterJDBCURL' }})
    copy_command: Optional[copycommand.CopyCommand] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CopyCommand' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    processing_configuration: Optional[processingconfiguration.ProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingConfiguration' }})
    retry_options: Optional[redshiftretryoptions.RedshiftRetryOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetryOptions' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARN' }})
    s3_backup_mode: Optional[redshifts3backupmode_enum.RedshiftS3BackupModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BackupMode' }})
    s3_backup_update: Optional[s3destinationupdate.S3DestinationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BackupUpdate' }})
    s3_update: Optional[s3destinationupdate.S3DestinationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Update' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    
