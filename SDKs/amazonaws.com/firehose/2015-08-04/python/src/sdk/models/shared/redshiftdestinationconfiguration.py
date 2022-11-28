from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RedshiftDestinationConfiguration:
    r"""RedshiftDestinationConfiguration
    Describes the configuration of a destination in Amazon Redshift.
    """
    
    cluster_jdbcurl: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterJDBCURL') }})
    copy_command: CopyCommand = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyCommand') }})
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    s3_configuration: S3DestinationConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Configuration') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    cloud_watch_logging_options: Optional[CloudWatchLoggingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    processing_configuration: Optional[ProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingConfiguration') }})
    retry_options: Optional[RedshiftRetryOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryOptions') }})
    s3_backup_configuration: Optional[S3DestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupConfiguration') }})
    s3_backup_mode: Optional[RedshiftS3BackupModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupMode') }})
    
