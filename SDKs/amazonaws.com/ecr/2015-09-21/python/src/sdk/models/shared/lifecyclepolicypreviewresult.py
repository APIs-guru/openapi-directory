from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lifecyclepolicyruleaction


@dataclass_json
@dataclass
class LifecyclePolicyPreviewResult:
    action: Optional[lifecyclepolicyruleaction.LifecyclePolicyRuleAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    applied_rule_priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appliedRulePriority' }})
    image_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageDigest' }})
    image_pushed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imagePushedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    image_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageTags' }})
    
