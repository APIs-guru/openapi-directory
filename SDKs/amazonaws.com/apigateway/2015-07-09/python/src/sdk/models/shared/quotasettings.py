from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import quotaperiodtype_enum


@dataclass_json
@dataclass
class QuotaSettings:
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    period: Optional[quotaperiodtype_enum.QuotaPeriodTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    
