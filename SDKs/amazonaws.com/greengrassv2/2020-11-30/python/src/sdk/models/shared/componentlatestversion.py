from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import componentplatform


@dataclass_json
@dataclass
class ComponentLatestVersion:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    component_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentVersion' }})
    creation_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    platforms: Optional[List[componentplatform.ComponentPlatform]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platforms' }})
    publisher: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisher' }})
    
