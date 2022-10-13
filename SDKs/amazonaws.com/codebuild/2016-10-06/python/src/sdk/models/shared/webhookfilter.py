from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import webhookfiltertype_enum


@dataclass_json
@dataclass
class WebhookFilter:
    exclude_matched_pattern: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeMatchedPattern' }})
    pattern: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pattern' }})
    type: webhookfiltertype_enum.WebhookFilterTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
