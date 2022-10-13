from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Trail:
    cloud_watch_logs_log_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLogsLogGroupArn' }})
    cloud_watch_logs_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLogsRoleArn' }})
    has_custom_event_selectors: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasCustomEventSelectors' }})
    has_insight_selectors: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasInsightSelectors' }})
    home_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomeRegion' }})
    include_global_service_events: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeGlobalServiceEvents' }})
    is_multi_region_trail: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsMultiRegionTrail' }})
    is_organization_trail: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsOrganizationTrail' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    log_file_validation_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogFileValidationEnabled' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BucketName' }})
    s3_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3KeyPrefix' }})
    sns_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnsTopicARN' }})
    sns_topic_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnsTopicName' }})
    trail_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrailARN' }})
    
