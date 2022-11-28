from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DescribeLifecycleConfigurationPathParams:
    file_system_id: str = field(metadata={'path_param': { 'field_name': 'FileSystemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeLifecycleConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeLifecycleConfigurationRequest:
    headers: DescribeLifecycleConfigurationHeaders = field()
    path_params: DescribeLifecycleConfigurationPathParams = field()
    

@dataclass
class DescribeLifecycleConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request: Optional[Any] = field(default=None)
    file_system_not_found: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    lifecycle_configuration_description: Optional[shared.LifecycleConfigurationDescription] = field(default=None)
    
