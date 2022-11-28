from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChangesetInfo:
    r"""ChangesetInfo
    A changeset is unit of data in a dataset.
    """
    
    change_type: Optional[ChangeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeType') }})
    changeset_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changesetArn') }})
    changeset_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changesetLabels') }})
    create_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dataset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetId') }})
    error_info: Optional[ErrorInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorInfo') }})
    format_params: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formatParams') }})
    format_type: Optional[FormatTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formatType') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    source_params: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceParams') }})
    source_type: Optional[SourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceType') }})
    status: Optional[ChangesetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated_by_changeset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedByChangesetId') }})
    updates_changeset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatesChangesetId') }})
    
