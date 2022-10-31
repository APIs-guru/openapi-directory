from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutIntegrationPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'DomainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutIntegrationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutIntegrationRequestBodyFlowDefinition:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    flow_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FlowName' }})
    kms_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsArn' }})
    source_flow_config: Optional[shared.SourceFlowConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceFlowConfig' }})
    tasks: Optional[List[shared.Task]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tasks' }})
    trigger_config: Optional[shared.TriggerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TriggerConfig' }})
    

@dataclass_json
@dataclass
class PutIntegrationRequestBody:
    flow_definition: Optional[PutIntegrationRequestBodyFlowDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FlowDefinition' }})
    object_type_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectTypeName' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Uri' }})
    

@dataclass
class PutIntegrationRequest:
    path_params: PutIntegrationPathParams = field(default=None)
    headers: PutIntegrationHeaders = field(default=None)
    request: PutIntegrationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutIntegrationResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    put_integration_response: Optional[shared.PutIntegrationResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
