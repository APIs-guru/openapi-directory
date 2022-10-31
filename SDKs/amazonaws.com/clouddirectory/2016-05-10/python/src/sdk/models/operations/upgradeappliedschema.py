from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpgradeAppliedSchemaHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpgradeAppliedSchemaRequestBody:
    directory_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryArn' }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DryRun' }})
    published_schema_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublishedSchemaArn' }})
    

@dataclass
class UpgradeAppliedSchemaRequest:
    headers: UpgradeAppliedSchemaHeaders = field(default=None)
    request: UpgradeAppliedSchemaRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpgradeAppliedSchemaResponse:
    access_denied_exception: Optional[shared.AccessDeniedException] = field(default=None)
    content_type: str = field(default=None)
    incompatible_schema_exception: Optional[shared.IncompatibleSchemaException] = field(default=None)
    internal_service_exception: Optional[shared.InternalServiceException] = field(default=None)
    invalid_arn_exception: Optional[shared.InvalidArnException] = field(default=None)
    invalid_attachment_exception: Optional[shared.InvalidAttachmentException] = field(default=None)
    resource_not_found_exception: Optional[shared.ResourceNotFoundException] = field(default=None)
    retryable_conflict_exception: Optional[shared.RetryableConflictException] = field(default=None)
    status_code: int = field(default=None)
    upgrade_applied_schema_response: Optional[shared.UpgradeAppliedSchemaResponse] = field(default=None)
    validation_exception: Optional[shared.ValidationException] = field(default=None)
    
