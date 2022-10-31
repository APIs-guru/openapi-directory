from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteDatasetContentPathParams:
    dataset_name: str = field(default=None, metadata={'path_param': { 'field_name': 'datasetName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDatasetContentQueryParams:
    version_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'versionId', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteDatasetContentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDatasetContentRequest:
    path_params: DeleteDatasetContentPathParams = field(default=None)
    query_params: DeleteDatasetContentQueryParams = field(default=None)
    headers: DeleteDatasetContentHeaders = field(default=None)
    

@dataclass
class DeleteDatasetContentResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
