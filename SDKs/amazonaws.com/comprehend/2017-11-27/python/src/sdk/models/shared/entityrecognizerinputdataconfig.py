from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EntityRecognizerInputDataConfig:
    r"""EntityRecognizerInputDataConfig
    Specifies the format and location of the input data.
    """
    
    entity_types: List[EntityTypesListItem] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityTypes') }})
    annotations: Optional[EntityRecognizerAnnotations] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Annotations') }})
    augmented_manifests: Optional[List[AugmentedManifestsListItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AugmentedManifests') }})
    data_format: Optional[EntityRecognizerDataFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataFormat') }})
    documents: Optional[EntityRecognizerDocuments] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Documents') }})
    entity_list: Optional[EntityRecognizerEntityList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityList') }})
    
