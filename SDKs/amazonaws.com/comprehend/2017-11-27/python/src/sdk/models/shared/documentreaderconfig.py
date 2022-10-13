from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import documentreadaction_enum
from . import documentreadmode_enum
from . import documentreadfeaturetypes_enum


@dataclass_json
@dataclass
class DocumentReaderConfig:
    document_read_action: documentreadaction_enum.DocumentReadActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentReadAction' }})
    document_read_mode: Optional[documentreadmode_enum.DocumentReadModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentReadMode' }})
    feature_types: Optional[List[documentreadfeaturetypes_enum.DocumentReadFeatureTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeatureTypes' }})
    
