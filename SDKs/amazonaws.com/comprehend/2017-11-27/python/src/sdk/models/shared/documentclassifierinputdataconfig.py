from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import augmentedmanifestslistitem
from . import documentclassifierdataformat_enum


@dataclass_json
@dataclass
class DocumentClassifierInputDataConfig:
    augmented_manifests: Optional[List[augmentedmanifestslistitem.AugmentedManifestsListItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AugmentedManifests' }})
    data_format: Optional[documentclassifierdataformat_enum.DocumentClassifierDataFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataFormat' }})
    label_delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LabelDelimiter' }})
    s3_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Uri' }})
    
