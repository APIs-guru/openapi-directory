from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateTrailRequest:
    cloud_watch_logs_log_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLogsLogGroupArn' }})
    cloud_watch_logs_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLogsRoleArn' }})
    enable_log_file_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableLogFileValidation' }})
    include_global_service_events: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeGlobalServiceEvents' }})
    is_multi_region_trail: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsMultiRegionTrail' }})
    is_organization_trail: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsOrganizationTrail' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BucketName' }})
    s3_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3KeyPrefix' }})
    sns_topic_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnsTopicName' }})
    
