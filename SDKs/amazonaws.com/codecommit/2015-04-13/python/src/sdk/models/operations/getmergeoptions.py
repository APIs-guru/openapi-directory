from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetMergeOptionsXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_GET_MERGE_OPTIONS = "CodeCommit_20150413.GetMergeOptions"


@dataclass
class GetMergeOptionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetMergeOptionsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetMergeOptionsRequest:
    headers: GetMergeOptionsHeaders = field(default=None)
    request: shared.GetMergeOptionsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetMergeOptionsResponse:
    commit_does_not_exist_exception: Optional[Any] = field(default=None)
    commit_required_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = field(default=None)
    encryption_key_disabled_exception: Optional[Any] = field(default=None)
    encryption_key_not_found_exception: Optional[Any] = field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = field(default=None)
    get_merge_options_output: Optional[shared.GetMergeOptionsOutput] = field(default=None)
    invalid_commit_exception: Optional[Any] = field(default=None)
    invalid_conflict_detail_level_exception: Optional[Any] = field(default=None)
    invalid_conflict_resolution_strategy_exception: Optional[Any] = field(default=None)
    invalid_repository_name_exception: Optional[Any] = field(default=None)
    maximum_file_content_to_load_exceeded_exception: Optional[Any] = field(default=None)
    maximum_items_to_compare_exceeded_exception: Optional[Any] = field(default=None)
    repository_does_not_exist_exception: Optional[Any] = field(default=None)
    repository_name_required_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    tips_divergence_exceeded_exception: Optional[Any] = field(default=None)
    
