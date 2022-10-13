from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import entityrecognizerannotations
from . import augmentedmanifestslistitem
from . import entityrecognizerdataformat_enum
from . import entityrecognizerdocuments
from . import entityrecognizerentitylist
from . import entitytypeslistitem


@dataclass_json
@dataclass
class EntityRecognizerInputDataConfig:
    annotations: Optional[entityrecognizerannotations.EntityRecognizerAnnotations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Annotations' }})
    augmented_manifests: Optional[List[augmentedmanifestslistitem.AugmentedManifestsListItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AugmentedManifests' }})
    data_format: Optional[entityrecognizerdataformat_enum.EntityRecognizerDataFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataFormat' }})
    documents: Optional[entityrecognizerdocuments.EntityRecognizerDocuments] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Documents' }})
    entity_list: Optional[entityrecognizerentitylist.EntityRecognizerEntityList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityList' }})
    entity_types: List[entitytypeslistitem.EntityTypesListItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityTypes' }})
    
