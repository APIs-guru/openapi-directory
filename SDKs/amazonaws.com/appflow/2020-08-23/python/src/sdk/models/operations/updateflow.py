from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateFlowHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateFlowRequestBodySourceFlowConfig:
    connector_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorProfileName' }})
    connector_type: Optional[shared.ConnectorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorType' }})
    incremental_pull_config: Optional[shared.IncrementalPullConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incrementalPullConfig' }})
    source_connector_properties: Optional[shared.SourceConnectorProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceConnectorProperties' }})
    

@dataclass_json
@dataclass
class UpdateFlowRequestBodyTriggerConfig:
    trigger_properties: Optional[shared.TriggerProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerProperties' }})
    trigger_type: Optional[shared.TriggerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerType' }})
    

@dataclass_json
@dataclass
class UpdateFlowRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    destination_flow_config_list: List[shared.DestinationFlowConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationFlowConfigList' }})
    flow_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowName' }})
    source_flow_config: UpdateFlowRequestBodySourceFlowConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceFlowConfig' }})
    tasks: List[shared.Task] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tasks' }})
    trigger_config: UpdateFlowRequestBodyTriggerConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerConfig' }})
    

@dataclass
class UpdateFlowRequest:
    headers: UpdateFlowHeaders = field(default=None)
    request: UpdateFlowRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateFlowResponse:
    conflict_exception: Optional[Any] = field(default=None)
    connector_authentication_exception: Optional[Any] = field(default=None)
    connector_server_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_flow_response: Optional[shared.UpdateFlowResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
