from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import configsnapshotdeliveryproperties


@dataclass_json
@dataclass
class DeliveryChannel:
    config_snapshot_delivery_properties: Optional[configsnapshotdeliveryproperties.ConfigSnapshotDeliveryProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configSnapshotDeliveryProperties' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3BucketName' }})
    s3_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3KeyPrefix' }})
    s3_kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3KmsKeyArn' }})
    sns_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snsTopicARN' }})
    
