from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateRepositoryXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_CREATE_REPOSITORY = "CodeCommit_20150413.CreateRepository"


@dataclass
class CreateRepositoryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreateRepositoryXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateRepositoryRequest:
    headers: CreateRepositoryHeaders = field(default=None)
    request: shared.CreateRepositoryInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateRepositoryResponse:
    content_type: str = field(default=None)
    create_repository_output: Optional[shared.CreateRepositoryOutput] = field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = field(default=None)
    encryption_key_disabled_exception: Optional[Any] = field(default=None)
    encryption_key_not_found_exception: Optional[Any] = field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = field(default=None)
    invalid_repository_description_exception: Optional[Any] = field(default=None)
    invalid_repository_name_exception: Optional[Any] = field(default=None)
    invalid_system_tag_usage_exception: Optional[Any] = field(default=None)
    invalid_tags_map_exception: Optional[Any] = field(default=None)
    repository_limit_exceeded_exception: Optional[Any] = field(default=None)
    repository_name_exists_exception: Optional[Any] = field(default=None)
    repository_name_required_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    tag_policy_exception: Optional[Any] = field(default=None)
    too_many_tags_exception: Optional[Any] = field(default=None)
    
