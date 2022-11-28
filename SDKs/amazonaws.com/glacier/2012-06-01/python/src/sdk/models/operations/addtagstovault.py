from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class AddTagsToVaultPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    vault_name: str = field(metadata={'path_param': { 'field_name': 'vaultName', 'style': 'simple', 'explode': False }})
    
class AddTagsToVaultOperationEnum(str, Enum):
    ADD = "add"


@dataclass
class AddTagsToVaultQueryParams:
    operation: AddTagsToVaultOperationEnum = field(metadata={'query_param': { 'field_name': 'operation', 'style': 'form', 'explode': True }})
    

@dataclass
class AddTagsToVaultHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddTagsToVaultRequestBody:
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

@dataclass
class AddTagsToVaultRequest:
    headers: AddTagsToVaultHeaders = field()
    path_params: AddTagsToVaultPathParams = field()
    query_params: AddTagsToVaultQueryParams = field()
    request: AddTagsToVaultRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddTagsToVaultResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    missing_parameter_value_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    
