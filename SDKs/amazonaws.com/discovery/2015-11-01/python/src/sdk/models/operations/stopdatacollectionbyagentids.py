from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class StopDataCollectionByAgentIdsXAmzTargetEnum(str, Enum):
    AWS_POSEIDON_SERVICE_V2015_11_01_STOP_DATA_COLLECTION_BY_AGENT_IDS = "AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds"


@dataclass
class StopDataCollectionByAgentIdsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: StopDataCollectionByAgentIdsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class StopDataCollectionByAgentIdsRequest:
    headers: StopDataCollectionByAgentIdsHeaders = field(default=None)
    request: shared.StopDataCollectionByAgentIdsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StopDataCollectionByAgentIdsResponse:
    authorization_error_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    home_region_not_set_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    server_internal_error_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    stop_data_collection_by_agent_ids_response: Optional[shared.StopDataCollectionByAgentIdsResponse] = field(default=None)
    
