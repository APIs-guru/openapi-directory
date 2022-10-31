from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DescribePlacementPathParams:
    placement_name: str = field(default=None, metadata={'path_param': { 'field_name': 'placementName', 'style': 'simple', 'explode': False }})
    project_name: str = field(default=None, metadata={'path_param': { 'field_name': 'projectName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribePlacementHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribePlacementRequest:
    path_params: DescribePlacementPathParams = field(default=None)
    headers: DescribePlacementHeaders = field(default=None)
    

@dataclass
class DescribePlacementResponse:
    content_type: str = field(default=None)
    describe_placement_response: Optional[shared.DescribePlacementResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
