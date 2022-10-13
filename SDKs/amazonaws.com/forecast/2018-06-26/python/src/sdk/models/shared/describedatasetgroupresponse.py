from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import domain_enum


@dataclass_json
@dataclass
class DescribeDatasetGroupResponse:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dataset_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetArns' }})
    dataset_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetGroupArn' }})
    dataset_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetGroupName' }})
    domain: Optional[domain_enum.DomainEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Domain' }})
    last_modification_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModificationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
