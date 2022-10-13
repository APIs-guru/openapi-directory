from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import augmentedmanifestsdocumenttypeformat_enum


@dataclass_json
@dataclass
class AugmentedManifestsListItem:
    annotation_data_s3_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnnotationDataS3Uri' }})
    attribute_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeNames' }})
    document_type: Optional[augmentedmanifestsdocumenttypeformat_enum.AugmentedManifestsDocumentTypeFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentType' }})
    s3_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Uri' }})
    source_documents_s3_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceDocumentsS3Uri' }})
    
