from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutReplicationConfigurationXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_REGISTRY_V20150921_PUT_REPLICATION_CONFIGURATION = "AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration"


@dataclass
class PutReplicationConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: PutReplicationConfigurationXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutReplicationConfigurationRequest:
    headers: PutReplicationConfigurationHeaders = field(default=None)
    request: shared.PutReplicationConfigurationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutReplicationConfigurationResponse:
    content_type: str = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    put_replication_configuration_response: Optional[shared.PutReplicationConfigurationResponse] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
