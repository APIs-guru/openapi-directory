from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import datasettype_enum
from . import domain_enum
from . import encryptionconfig
from . import schema
from . import tag


@dataclass_json
@dataclass
class CreateDatasetRequest:
    data_frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataFrequency' }})
    dataset_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetName' }})
    dataset_type: datasettype_enum.DatasetTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetType' }})
    domain: domain_enum.DomainEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Domain' }})
    encryption_config: Optional[encryptionconfig.EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionConfig' }})
    schema: schema.Schema = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schema' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
