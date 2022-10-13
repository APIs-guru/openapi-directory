from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateManagedEndpointPathParams:
    virtual_cluster_id: str = field(default=None, metadata={'path_param': { 'field_name': 'virtualClusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateManagedEndpointHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateManagedEndpointRequestBodyConfigurationOverrides:
    application_configuration: Optional[List[shared.Configuration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationConfiguration' }})
    monitoring_configuration: Optional[shared.MonitoringConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitoringConfiguration' }})
    

@dataclass_json
@dataclass
class CreateManagedEndpointRequestBody:
    certificate_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateArn' }})
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    configuration_overrides: Optional[CreateManagedEndpointRequestBodyConfigurationOverrides] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationOverrides' }})
    execution_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionRoleArn' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    release_label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseLabel' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class CreateManagedEndpointRequest:
    path_params: CreateManagedEndpointPathParams = field(default=None)
    headers: CreateManagedEndpointHeaders = field(default=None)
    request: CreateManagedEndpointRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateManagedEndpointResponse:
    content_type: str = field(default=None)
    create_managed_endpoint_response: Optional[shared.CreateManagedEndpointResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
