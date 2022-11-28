from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class PutFileXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_PUT_FILE = "CodeCommit_20150413.PutFile"


@dataclass
class PutFileHeaders:
    x_amz_target: PutFileXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutFileRequest:
    headers: PutFileHeaders = field()
    request: shared.PutFileInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutFileResponse:
    content_type: str = field()
    status_code: int = field()
    branch_does_not_exist_exception: Optional[Any] = field(default=None)
    branch_name_is_tag_name_exception: Optional[Any] = field(default=None)
    branch_name_required_exception: Optional[Any] = field(default=None)
    commit_message_length_exceeded_exception: Optional[Any] = field(default=None)
    directory_name_conflicts_with_file_name_exception: Optional[Any] = field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = field(default=None)
    encryption_key_disabled_exception: Optional[Any] = field(default=None)
    encryption_key_not_found_exception: Optional[Any] = field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = field(default=None)
    file_content_required_exception: Optional[Any] = field(default=None)
    file_content_size_limit_exceeded_exception: Optional[Any] = field(default=None)
    file_name_conflicts_with_directory_name_exception: Optional[Any] = field(default=None)
    file_path_conflicts_with_submodule_path_exception: Optional[Any] = field(default=None)
    folder_content_size_limit_exceeded_exception: Optional[Any] = field(default=None)
    invalid_branch_name_exception: Optional[Any] = field(default=None)
    invalid_deletion_parameter_exception: Optional[Any] = field(default=None)
    invalid_email_exception: Optional[Any] = field(default=None)
    invalid_file_mode_exception: Optional[Any] = field(default=None)
    invalid_parent_commit_id_exception: Optional[Any] = field(default=None)
    invalid_path_exception: Optional[Any] = field(default=None)
    invalid_repository_name_exception: Optional[Any] = field(default=None)
    name_length_exceeded_exception: Optional[Any] = field(default=None)
    parent_commit_does_not_exist_exception: Optional[Any] = field(default=None)
    parent_commit_id_outdated_exception: Optional[Any] = field(default=None)
    parent_commit_id_required_exception: Optional[Any] = field(default=None)
    path_required_exception: Optional[Any] = field(default=None)
    put_file_output: Optional[shared.PutFileOutput] = field(default=None)
    repository_does_not_exist_exception: Optional[Any] = field(default=None)
    repository_name_required_exception: Optional[Any] = field(default=None)
    same_file_content_exception: Optional[Any] = field(default=None)
    
