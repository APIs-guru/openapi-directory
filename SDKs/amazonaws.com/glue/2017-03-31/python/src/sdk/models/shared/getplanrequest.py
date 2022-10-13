from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import language_enum
from . import location
from . import mappingentry
from . import catalogentry
from . import catalogentry


@dataclass_json
@dataclass
class GetPlanRequest:
    additional_plan_options_map: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalPlanOptionsMap' }})
    language: Optional[language_enum.LanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Language' }})
    location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }})
    mapping: List[mappingentry.MappingEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mapping' }})
    sinks: Optional[List[catalogentry.CatalogEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sinks' }})
    source: catalogentry.CatalogEntry = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    
