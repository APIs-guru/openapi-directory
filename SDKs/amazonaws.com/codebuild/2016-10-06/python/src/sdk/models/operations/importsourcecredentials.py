from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ImportSourceCredentialsXAmzTargetEnum(str, Enum):
    CODE_BUILD_20161006_IMPORT_SOURCE_CREDENTIALS = "CodeBuild_20161006.ImportSourceCredentials"


@dataclass
class ImportSourceCredentialsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ImportSourceCredentialsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ImportSourceCredentialsRequest:
    headers: ImportSourceCredentialsHeaders = field(default=None)
    request: shared.ImportSourceCredentialsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ImportSourceCredentialsResponse:
    account_limit_exceeded_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    import_source_credentials_output: Optional[shared.ImportSourceCredentialsOutput] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
