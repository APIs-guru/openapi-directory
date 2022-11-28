from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListRepositoryAssociationsQueryParams:
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'Name', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    owner: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'Owner', 'style': 'form', 'explode': True }})
    provider_type: Optional[List[shared.ProviderTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ProviderType', 'style': 'form', 'explode': True }})
    state: Optional[List[shared.RepositoryAssociationStateEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'State', 'style': 'form', 'explode': True }})
    

@dataclass
class ListRepositoryAssociationsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListRepositoryAssociationsRequest:
    headers: ListRepositoryAssociationsHeaders = field()
    query_params: ListRepositoryAssociationsQueryParams = field()
    

@dataclass
class ListRepositoryAssociationsResponse:
    content_type: str = field()
    status_code: int = field()
    internal_server_exception: Optional[Any] = field(default=None)
    list_repository_associations_response: Optional[shared.ListRepositoryAssociationsResponse] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
