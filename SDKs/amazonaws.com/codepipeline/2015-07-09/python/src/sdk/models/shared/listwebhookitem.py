from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import webhookdefinition
from . import tag


@dataclass_json
@dataclass
class ListWebhookItem:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    definition: webhookdefinition.WebhookDefinition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definition' }})
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    last_triggered: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastTriggered', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
