from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AugmentedManifestsListItem:
    r"""AugmentedManifestsListItem
    An augmented manifest file that provides training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.
    """
    
    attribute_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeNames') }})
    s3_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    annotation_data_s3_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnnotationDataS3Uri') }})
    document_type: Optional[AugmentedManifestsDocumentTypeFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentType') }})
    source_documents_s3_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceDocumentsS3Uri') }})
    
