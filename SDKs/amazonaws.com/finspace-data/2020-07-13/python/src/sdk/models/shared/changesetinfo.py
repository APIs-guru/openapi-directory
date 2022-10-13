from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import changetype_enum
from . import errorinfo
from . import formattype_enum
from . import sourcetype_enum
from . import changesetstatus_enum


@dataclass_json
@dataclass
class ChangesetInfo:
    change_type: Optional[changetype_enum.ChangeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changeType' }})
    changeset_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changesetArn' }})
    changeset_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changesetLabels' }})
    create_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dataset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetId' }})
    error_info: Optional[errorinfo.ErrorInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorInfo' }})
    format_params: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formatParams' }})
    format_type: Optional[formattype_enum.FormatTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formatType' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    source_params: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceParams' }})
    source_type: Optional[sourcetype_enum.SourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceType' }})
    status: Optional[changesetstatus_enum.ChangesetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_by_changeset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedByChangesetId' }})
    updates_changeset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatesChangesetId' }})
    
