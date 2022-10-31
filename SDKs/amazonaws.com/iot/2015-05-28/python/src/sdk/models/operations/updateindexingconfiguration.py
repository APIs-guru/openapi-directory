from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateIndexingConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration:
    custom_fields: Optional[List[shared.Field]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customFields' }})
    managed_fields: Optional[List[shared.Field]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedFields' }})
    thing_group_indexing_mode: Optional[shared.ThingGroupIndexingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingGroupIndexingMode' }})
    

@dataclass_json
@dataclass
class UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration:
    custom_fields: Optional[List[shared.Field]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customFields' }})
    managed_fields: Optional[List[shared.Field]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedFields' }})
    thing_connectivity_indexing_mode: Optional[shared.ThingConnectivityIndexingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingConnectivityIndexingMode' }})
    thing_indexing_mode: Optional[shared.ThingIndexingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingIndexingMode' }})
    

@dataclass_json
@dataclass
class UpdateIndexingConfigurationRequestBody:
    thing_group_indexing_configuration: Optional[UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingGroupIndexingConfiguration' }})
    thing_indexing_configuration: Optional[UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingIndexingConfiguration' }})
    

@dataclass
class UpdateIndexingConfigurationRequest:
    headers: UpdateIndexingConfigurationHeaders = field(default=None)
    request: UpdateIndexingConfigurationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateIndexingConfigurationResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    update_indexing_configuration_response: Optional[dict[str, Any]] = field(default=None)
    
