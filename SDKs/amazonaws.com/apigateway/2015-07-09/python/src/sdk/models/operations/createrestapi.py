from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateRestAPIHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class CreateRestAPIRequestBodyAPIKeySourceEnum(str, Enum):
    HEADER = "HEADER"
    AUTHORIZER = "AUTHORIZER"


@dataclass_json
@dataclass
class CreateRestAPIRequestBodyEndpointConfiguration:
    types: Optional[List[shared.EndpointTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'types' }})
    vpc_endpoint_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcEndpointIds' }})
    

@dataclass_json
@dataclass
class CreateRestAPIRequestBody:
    api_key_source: Optional[CreateRestAPIRequestBodyAPIKeySourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKeySource' }})
    binary_media_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'binaryMediaTypes' }})
    clone_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloneFrom' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disable_execute_api_endpoint: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableExecuteApiEndpoint' }})
    endpoint_configuration: Optional[CreateRestAPIRequestBodyEndpointConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointConfiguration' }})
    minimum_compression_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumCompressionSize' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass
class CreateRestAPIRequest:
    headers: CreateRestAPIHeaders = field(default=None)
    request: CreateRestAPIRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateRestAPIResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    rest_api: Optional[shared.RestAPI] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
