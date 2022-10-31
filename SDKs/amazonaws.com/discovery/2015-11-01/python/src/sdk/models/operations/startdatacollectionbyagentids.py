from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class StartDataCollectionByAgentIdsXAmzTargetEnum(str, Enum):
    AWS_POSEIDON_SERVICE_V2015_11_01_START_DATA_COLLECTION_BY_AGENT_IDS = "AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds"


@dataclass
class StartDataCollectionByAgentIdsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: StartDataCollectionByAgentIdsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartDataCollectionByAgentIdsRequest:
    headers: StartDataCollectionByAgentIdsHeaders = field(default=None)
    request: shared.StartDataCollectionByAgentIdsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartDataCollectionByAgentIdsResponse:
    authorization_error_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    home_region_not_set_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    server_internal_error_exception: Optional[Any] = field(default=None)
    start_data_collection_by_agent_ids_response: Optional[shared.StartDataCollectionByAgentIdsResponse] = field(default=None)
    status_code: int = field(default=None)
    
