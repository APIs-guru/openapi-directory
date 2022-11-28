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
class RedshiftDestinationUpdate:
    r"""RedshiftDestinationUpdate
    Describes an update for a destination in Amazon Redshift.
    """
    
    cloud_watch_logging_options: Optional[CloudWatchLoggingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    cluster_jdbcurl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterJDBCURL') }})
    copy_command: Optional[CopyCommand] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyCommand') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    processing_configuration: Optional[ProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingConfiguration') }})
    retry_options: Optional[RedshiftRetryOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryOptions') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    s3_backup_mode: Optional[RedshiftS3BackupModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupMode') }})
    s3_backup_update: Optional[S3DestinationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupUpdate') }})
    s3_update: Optional[S3DestinationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Update') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
