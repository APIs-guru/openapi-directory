from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ElasticsearchDestinationConfiguration:
    r"""ElasticsearchDestinationConfiguration
    Describes the configuration of a destination in Amazon ES.
    """
    
    index_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    s3_configuration: S3DestinationConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Configuration') }})
    buffering_hints: Optional[ElasticsearchBufferingHints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BufferingHints') }})
    cloud_watch_logging_options: Optional[CloudWatchLoggingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    cluster_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterEndpoint') }})
    domain_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainARN') }})
    index_rotation_period: Optional[ElasticsearchIndexRotationPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexRotationPeriod') }})
    processing_configuration: Optional[ProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingConfiguration') }})
    retry_options: Optional[ElasticsearchRetryOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryOptions') }})
    s3_backup_mode: Optional[ElasticsearchS3BackupModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupMode') }})
    type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypeName') }})
    vpc_configuration: Optional[VpcConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfiguration') }})
    
