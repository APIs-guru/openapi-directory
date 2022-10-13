from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import finding_enum
from . import reasoncodesummary


@dataclass_json
@dataclass
class Summary:
    name: Optional[finding_enum.FindingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reason_code_summaries: Optional[List[reasoncodesummary.ReasonCodeSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasonCodeSummaries' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
