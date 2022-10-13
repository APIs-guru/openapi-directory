from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import cloudwatchloggingoptions
from . import copycommand
from . import processingconfiguration
from . import redshiftretryoptions
from . import s3destinationconfiguration
from . import redshifts3backupmode_enum
from . import s3destinationconfiguration


@dataclass_json
@dataclass
class RedshiftDestinationConfiguration:
    cloud_watch_logging_options: Optional[cloudwatchloggingoptions.CloudWatchLoggingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLoggingOptions' }})
    cluster_jdbcurl: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterJDBCURL' }})
    copy_command: copycommand.CopyCommand = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CopyCommand' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    processing_configuration: Optional[processingconfiguration.ProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingConfiguration' }})
    retry_options: Optional[redshiftretryoptions.RedshiftRetryOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetryOptions' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARN' }})
    s3_backup_configuration: Optional[s3destinationconfiguration.S3DestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BackupConfiguration' }})
    s3_backup_mode: Optional[redshifts3backupmode_enum.RedshiftS3BackupModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BackupMode' }})
    s3_configuration: s3destinationconfiguration.S3DestinationConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Configuration' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    
