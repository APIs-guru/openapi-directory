from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutDefaultEncryptionConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum(str, Enum):
    SITEWISE_DEFAULT_ENCRYPTION = "SITEWISE_DEFAULT_ENCRYPTION"
    KMS_BASED_ENCRYPTION = "KMS_BASED_ENCRYPTION"


@dataclass_json
@dataclass
class PutDefaultEncryptionConfigurationRequestBody:
    encryption_type: PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionType' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyId' }})
    

@dataclass
class PutDefaultEncryptionConfigurationRequest:
    headers: PutDefaultEncryptionConfigurationHeaders = field(default=None)
    request: PutDefaultEncryptionConfigurationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutDefaultEncryptionConfigurationResponse:
    conflicting_operation_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    put_default_encryption_configuration_response: Optional[shared.PutDefaultEncryptionConfigurationResponse] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
