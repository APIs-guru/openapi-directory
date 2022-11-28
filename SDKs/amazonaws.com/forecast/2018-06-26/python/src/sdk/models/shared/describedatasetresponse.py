from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeDatasetResponse:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataFrequency') }})
    dataset_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetArn') }})
    dataset_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetName') }})
    dataset_type: Optional[DatasetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetType') }})
    domain: Optional[DomainEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    encryption_config: Optional[EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionConfig') }})
    last_modification_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModificationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    schema: Optional[Schema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schema') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
