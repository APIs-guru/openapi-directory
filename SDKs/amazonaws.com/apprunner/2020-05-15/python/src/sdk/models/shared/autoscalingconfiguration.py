from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import autoscalingconfigurationstatus_enum


@dataclass_json
@dataclass
class AutoScalingConfiguration:
    auto_scaling_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingConfigurationArn' }})
    auto_scaling_configuration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingConfigurationName' }})
    auto_scaling_configuration_revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingConfigurationRevision' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeletedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Latest' }})
    max_concurrency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxConcurrency' }})
    max_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxSize' }})
    min_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinSize' }})
    status: Optional[autoscalingconfigurationstatus_enum.AutoScalingConfigurationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
