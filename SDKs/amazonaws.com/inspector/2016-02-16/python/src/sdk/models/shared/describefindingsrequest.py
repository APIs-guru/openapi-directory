from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import locale_enum


@dataclass_json
@dataclass
class DescribeFindingsRequest:
    finding_arns: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingArns' }})
    locale: Optional[locale_enum.LocaleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    
