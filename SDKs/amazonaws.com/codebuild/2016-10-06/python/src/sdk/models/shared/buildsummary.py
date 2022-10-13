from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import statustype_enum
from . import resolvedartifact
from . import resolvedartifact


@dataclass_json
@dataclass
class BuildSummary:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    build_status: Optional[statustype_enum.StatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildStatus' }})
    primary_artifact: Optional[resolvedartifact.ResolvedArtifact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryArtifact' }})
    requested_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    secondary_artifacts: Optional[List[resolvedartifact.ResolvedArtifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryArtifacts' }})
    
