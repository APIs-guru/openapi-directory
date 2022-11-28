from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DescribeUpdatePathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    update_id: str = field(metadata={'path_param': { 'field_name': 'updateId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeUpdateQueryParams:
    addon_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'addonName', 'style': 'form', 'explode': True }})
    nodegroup_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nodegroupName', 'style': 'form', 'explode': True }})
    

@dataclass
class DescribeUpdateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeUpdateRequest:
    headers: DescribeUpdateHeaders = field()
    path_params: DescribeUpdatePathParams = field()
    query_params: DescribeUpdateQueryParams = field()
    

@dataclass
class DescribeUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    client_exception: Optional[Any] = field(default=None)
    describe_update_response: Optional[shared.DescribeUpdateResponse] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    
