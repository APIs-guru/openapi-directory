from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateAssetModelPathParams:
    asset_model_id: str = field(default=None, metadata={'path_param': { 'field_name': 'assetModelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAssetModelHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateAssetModelRequestBody:
    asset_model_composite_models: Optional[List[shared.AssetModelCompositeModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetModelCompositeModels' }})
    asset_model_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetModelDescription' }})
    asset_model_hierarchies: Optional[List[shared.AssetModelHierarchy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetModelHierarchies' }})
    asset_model_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetModelName' }})
    asset_model_properties: Optional[List[shared.AssetModelProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetModelProperties' }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    

@dataclass
class UpdateAssetModelRequest:
    path_params: UpdateAssetModelPathParams = field(default=None)
    headers: UpdateAssetModelHeaders = field(default=None)
    request: UpdateAssetModelRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAssetModelResponse:
    conflicting_operation_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_asset_model_response: Optional[shared.UpdateAssetModelResponse] = field(default=None)
    
