from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateFlowHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateFlowRequestBodySourceFlowConfig:
    r"""UpdateFlowRequestBodySourceFlowConfig
     Contains information about the configuration of the source connector used in the flow. 
    """
    
    connector_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorProfileName') }})
    connector_type: Optional[shared.ConnectorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorType') }})
    incremental_pull_config: Optional[shared.IncrementalPullConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incrementalPullConfig') }})
    source_connector_properties: Optional[shared.SourceConnectorProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceConnectorProperties') }})
    

@dataclass_json
@dataclass
class UpdateFlowRequestBodyTriggerConfig:
    r"""UpdateFlowRequestBodyTriggerConfig
     The trigger settings that determine how and when Amazon AppFlow runs the specified flow. 
    """
    
    trigger_properties: Optional[shared.TriggerProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerProperties') }})
    trigger_type: Optional[shared.TriggerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerType') }})
    

@dataclass_json
@dataclass
class UpdateFlowRequestBody:
    destination_flow_config_list: List[shared.DestinationFlowConfig] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationFlowConfigList') }})
    flow_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowName') }})
    source_flow_config: UpdateFlowRequestBodySourceFlowConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceFlowConfig') }})
    tasks: List[shared.Task] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks') }})
    trigger_config: UpdateFlowRequestBodyTriggerConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerConfig') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass
class UpdateFlowRequest:
    headers: UpdateFlowHeaders = field()
    request: UpdateFlowRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateFlowResponse:
    content_type: str = field()
    status_code: int = field()
    conflict_exception: Optional[Any] = field(default=None)
    connector_authentication_exception: Optional[Any] = field(default=None)
    connector_server_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    update_flow_response: Optional[shared.UpdateFlowResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
