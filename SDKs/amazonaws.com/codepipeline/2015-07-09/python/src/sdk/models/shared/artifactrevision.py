from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ArtifactRevision:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    revision_change_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionChangeIdentifier' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    revision_summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionSummary' }})
    revision_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionUrl' }})
    
