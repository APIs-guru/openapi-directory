from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import elasticsearchbufferinghints
from . import cloudwatchloggingoptions
from . import elasticsearchindexrotationperiod_enum
from . import processingconfiguration
from . import elasticsearchretryoptions
from . import s3destinationupdate


@dataclass_json
@dataclass
class ElasticsearchDestinationUpdate:
    buffering_hints: Optional[elasticsearchbufferinghints.ElasticsearchBufferingHints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BufferingHints' }})
    cloud_watch_logging_options: Optional[cloudwatchloggingoptions.CloudWatchLoggingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLoggingOptions' }})
    cluster_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterEndpoint' }})
    domain_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainARN' }})
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexName' }})
    index_rotation_period: Optional[elasticsearchindexrotationperiod_enum.ElasticsearchIndexRotationPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexRotationPeriod' }})
    processing_configuration: Optional[processingconfiguration.ProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingConfiguration' }})
    retry_options: Optional[elasticsearchretryoptions.ElasticsearchRetryOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetryOptions' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARN' }})
    s3_update: Optional[s3destinationupdate.S3DestinationUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Update' }})
    type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypeName' }})
    
