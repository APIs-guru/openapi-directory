from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datasettype_enum
from . import domain_enum
from . import encryptionconfig
from . import schema


@dataclass_json
@dataclass
class DescribeDatasetResponse:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataFrequency' }})
    dataset_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetArn' }})
    dataset_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetName' }})
    dataset_type: Optional[datasettype_enum.DatasetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetType' }})
    domain: Optional[domain_enum.DomainEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Domain' }})
    encryption_config: Optional[encryptionconfig.EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionConfig' }})
    last_modification_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModificationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    schema: Optional[schema.Schema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schema' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
