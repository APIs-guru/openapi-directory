from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BuildSummary:
    r"""BuildSummary
    Contains summary information about a batch build group.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    build_status: Optional[StatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildStatus') }})
    primary_artifact: Optional[ResolvedArtifact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryArtifact') }})
    requested_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    secondary_artifacts: Optional[List[ResolvedArtifact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryArtifacts') }})
    
