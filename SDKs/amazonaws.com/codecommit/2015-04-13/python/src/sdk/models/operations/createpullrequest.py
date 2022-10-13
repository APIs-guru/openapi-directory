from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreatePullRequestXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_CREATE_PULL_REQUEST = "CodeCommit_20150413.CreatePullRequest"


@dataclass
class CreatePullRequestHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreatePullRequestXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreatePullRequestRequest:
    headers: CreatePullRequestHeaders = field(default=None)
    request: shared.CreatePullRequestInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePullRequestResponse:
    client_request_token_required_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_pull_request_output: Optional[shared.CreatePullRequestOutput] = field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = field(default=None)
    encryption_key_disabled_exception: Optional[Any] = field(default=None)
    encryption_key_not_found_exception: Optional[Any] = field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = field(default=None)
    idempotency_parameter_mismatch_exception: Optional[Any] = field(default=None)
    invalid_client_request_token_exception: Optional[Any] = field(default=None)
    invalid_description_exception: Optional[Any] = field(default=None)
    invalid_reference_name_exception: Optional[Any] = field(default=None)
    invalid_repository_name_exception: Optional[Any] = field(default=None)
    invalid_target_exception: Optional[Any] = field(default=None)
    invalid_targets_exception: Optional[Any] = field(default=None)
    invalid_title_exception: Optional[Any] = field(default=None)
    maximum_open_pull_requests_exceeded_exception: Optional[Any] = field(default=None)
    multiple_repositories_in_pull_request_exception: Optional[Any] = field(default=None)
    reference_does_not_exist_exception: Optional[Any] = field(default=None)
    reference_name_required_exception: Optional[Any] = field(default=None)
    reference_type_not_supported_exception: Optional[Any] = field(default=None)
    repository_does_not_exist_exception: Optional[Any] = field(default=None)
    repository_name_required_exception: Optional[Any] = field(default=None)
    source_and_destination_are_same_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    target_required_exception: Optional[Any] = field(default=None)
    targets_required_exception: Optional[Any] = field(default=None)
    title_required_exception: Optional[Any] = field(default=None)
    
