from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DocumentClassifierInputDataConfig:
    r"""DocumentClassifierInputDataConfig
    <p>The input properties for training a document classifier. </p> <p>For more information on how the input file is formatted, see <a>how-document-classification-training-data</a>. </p>
    """
    
    augmented_manifests: Optional[List[AugmentedManifestsListItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AugmentedManifests') }})
    data_format: Optional[DocumentClassifierDataFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataFormat') }})
    label_delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelDelimiter') }})
    s3_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    
