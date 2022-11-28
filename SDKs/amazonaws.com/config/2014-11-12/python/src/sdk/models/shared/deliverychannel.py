from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeliveryChannel:
    r"""DeliveryChannel
    The channel through which Config delivers notifications and updated configuration states.
    """
    
    config_snapshot_delivery_properties: Optional[ConfigSnapshotDeliveryProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configSnapshotDeliveryProperties') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3BucketName') }})
    s3_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3KeyPrefix') }})
    s3_kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3KmsKeyArn') }})
    sns_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snsTopicARN') }})
    
