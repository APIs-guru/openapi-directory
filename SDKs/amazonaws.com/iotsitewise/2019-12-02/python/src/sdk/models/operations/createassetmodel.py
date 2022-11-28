from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateAssetModelHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateAssetModelRequestBody:
    asset_model_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelName') }})
    asset_model_composite_models: Optional[List[shared.AssetModelCompositeModelDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelCompositeModels') }})
    asset_model_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelDescription') }})
    asset_model_hierarchies: Optional[List[shared.AssetModelHierarchyDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelHierarchies') }})
    asset_model_properties: Optional[List[shared.AssetModelPropertyDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelProperties') }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateAssetModelRequest:
    headers: CreateAssetModelHeaders = field()
    request: CreateAssetModelRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAssetModelResponse:
    content_type: str = field()
    status_code: int = field()
    conflicting_operation_exception: Optional[Any] = field(default=None)
    create_asset_model_response: Optional[shared.CreateAssetModelResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
