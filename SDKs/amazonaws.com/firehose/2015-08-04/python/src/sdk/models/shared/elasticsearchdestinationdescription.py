from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import elasticsearchbufferinghints
from . import cloudwatchloggingoptions
from . import elasticsearchindexrotationperiod_enum
from . import processingconfiguration
from . import elasticsearchretryoptions
from . import elasticsearchs3backupmode_enum
from . import s3destinationdescription
from . import vpcconfigurationdescription


@dataclass_json
@dataclass
class ElasticsearchDestinationDescription:
    buffering_hints: Optional[elasticsearchbufferinghints.ElasticsearchBufferingHints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BufferingHints' }})
    cloud_watch_logging_options: Optional[cloudwatchloggingoptions.CloudWatchLoggingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLoggingOptions' }})
    cluster_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterEndpoint' }})
    domain_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainARN' }})
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexName' }})
    index_rotation_period: Optional[elasticsearchindexrotationperiod_enum.ElasticsearchIndexRotationPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexRotationPeriod' }})
    processing_configuration: Optional[processingconfiguration.ProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingConfiguration' }})
    retry_options: Optional[elasticsearchretryoptions.ElasticsearchRetryOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetryOptions' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARN' }})
    s3_backup_mode: Optional[elasticsearchs3backupmode_enum.ElasticsearchS3BackupModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BackupMode' }})
    s3_destination_description: Optional[s3destinationdescription.S3DestinationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3DestinationDescription' }})
    type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypeName' }})
    vpc_configuration_description: Optional[vpcconfigurationdescription.VpcConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfigurationDescription' }})
    
