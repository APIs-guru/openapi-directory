from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateDatasetPathParams:
    dataset_name: str = field(metadata={'path_param': { 'field_name': 'datasetName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDatasetHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateDatasetRequestBodyRetentionPeriod:
    r"""UpdateDatasetRequestBodyRetentionPeriod
    How long, in days, message data is kept.
    """
    
    number_of_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfDays') }})
    unlimited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unlimited') }})
    

@dataclass_json
@dataclass
class UpdateDatasetRequestBodyVersioningConfiguration:
    r"""UpdateDatasetRequestBodyVersioningConfiguration
    Information about the versioning of dataset contents.
    """
    
    max_versions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxVersions') }})
    unlimited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unlimited') }})
    

@dataclass_json
@dataclass
class UpdateDatasetRequestBody:
    actions: List[shared.DatasetAction] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    content_delivery_rules: Optional[List[shared.DatasetContentDeliveryRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDeliveryRules') }})
    late_data_rules: Optional[List[shared.LateDataRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lateDataRules') }})
    retention_period: Optional[UpdateDatasetRequestBodyRetentionPeriod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retentionPeriod') }})
    triggers: Optional[List[shared.DatasetTrigger]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggers') }})
    versioning_configuration: Optional[UpdateDatasetRequestBodyVersioningConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versioningConfiguration') }})
    

@dataclass
class UpdateDatasetRequest:
    headers: UpdateDatasetHeaders = field()
    path_params: UpdateDatasetPathParams = field()
    request: UpdateDatasetRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDatasetResponse:
    content_type: str = field()
    status_code: int = field()
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
