from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ElasticsearchDestinationDescription:
    r"""ElasticsearchDestinationDescription
    The destination description in Amazon ES.
    """
    
    buffering_hints: Optional[ElasticsearchBufferingHints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BufferingHints') }})
    cloud_watch_logging_options: Optional[CloudWatchLoggingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    cluster_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterEndpoint') }})
    domain_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainARN') }})
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    index_rotation_period: Optional[ElasticsearchIndexRotationPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexRotationPeriod') }})
    processing_configuration: Optional[ProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingConfiguration') }})
    retry_options: Optional[ElasticsearchRetryOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryOptions') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    s3_backup_mode: Optional[ElasticsearchS3BackupModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupMode') }})
    s3_destination_description: Optional[S3DestinationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3DestinationDescription') }})
    type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypeName') }})
    vpc_configuration_description: Optional[VpcConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfigurationDescription') }})
    
