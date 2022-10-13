from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateDatasetPathParams:
    dataset_name: str = field(default=None, metadata={'path_param': { 'field_name': 'datasetName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDatasetHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateDatasetRequestBodyRetentionPeriod:
    number_of_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfDays' }})
    unlimited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unlimited' }})
    

@dataclass_json
@dataclass
class UpdateDatasetRequestBodyVersioningConfiguration:
    max_versions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxVersions' }})
    unlimited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unlimited' }})
    

@dataclass_json
@dataclass
class UpdateDatasetRequestBody:
    actions: List[shared.DatasetAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    content_delivery_rules: Optional[List[shared.DatasetContentDeliveryRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentDeliveryRules' }})
    late_data_rules: Optional[List[shared.LateDataRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lateDataRules' }})
    retention_period: Optional[UpdateDatasetRequestBodyRetentionPeriod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retentionPeriod' }})
    triggers: Optional[List[shared.DatasetTrigger]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggers' }})
    versioning_configuration: Optional[UpdateDatasetRequestBodyVersioningConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versioningConfiguration' }})
    

@dataclass
class UpdateDatasetRequest:
    path_params: UpdateDatasetPathParams = field(default=None)
    headers: UpdateDatasetHeaders = field(default=None)
    request: UpdateDatasetRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDatasetResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
