from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import globalresources_shared_models_stringtranslation


@dataclass_json
@dataclass
class GlobalResourcesSharedModelsStringDefinition:
    description_for_translator: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DescriptionForTranslator' }})
    do_not_translate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DoNotTranslate' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    parameter_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterCount' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp' }})
    translations: Optional[List[globalresources_shared_models_stringtranslation.GlobalResourcesSharedModelsStringTranslation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Translations' }})
    
