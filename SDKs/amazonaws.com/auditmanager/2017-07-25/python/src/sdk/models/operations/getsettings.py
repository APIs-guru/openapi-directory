from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GetSettingsAttributeEnum(str, Enum):
    ALL = "ALL"
    IS_AWS_ORG_ENABLED = "IS_AWS_ORG_ENABLED"
    SNS_TOPIC = "SNS_TOPIC"
    DEFAULT_ASSESSMENT_REPORTS_DESTINATION = "DEFAULT_ASSESSMENT_REPORTS_DESTINATION"
    DEFAULT_PROCESS_OWNERS = "DEFAULT_PROCESS_OWNERS"


@dataclass
class GetSettingsPathParams:
    attribute: GetSettingsAttributeEnum = field(metadata={'path_param': { 'field_name': 'attribute', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSettingsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSettingsRequest:
    headers: GetSettingsHeaders = field()
    path_params: GetSettingsPathParams = field()
    

@dataclass
class GetSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    get_settings_response: Optional[shared.GetSettingsResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    
