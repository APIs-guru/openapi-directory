from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import metricssummary
from . import providertype_enum
from . import sourcecodetype
from . import jobstate_enum
from . import type_enum


@dataclass_json
@dataclass
class CodeReviewSummary:
    code_review_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeReviewArn' }})
    created_time_stamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTimeStamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_time_stamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedTimeStamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    metrics_summary: Optional[metricssummary.MetricsSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricsSummary' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Owner' }})
    provider_type: Optional[providertype_enum.ProviderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderType' }})
    pull_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PullRequestId' }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepositoryName' }})
    source_code_type: Optional[sourcecodetype.SourceCodeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceCodeType' }})
    state: Optional[jobstate_enum.JobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    type: Optional[type_enum.TypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
