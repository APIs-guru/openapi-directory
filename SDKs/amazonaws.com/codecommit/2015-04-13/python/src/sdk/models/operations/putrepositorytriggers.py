from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class PutRepositoryTriggersXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_PUT_REPOSITORY_TRIGGERS = "CodeCommit_20150413.PutRepositoryTriggers"


@dataclass
class PutRepositoryTriggersHeaders:
    x_amz_target: PutRepositoryTriggersXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRepositoryTriggersRequest:
    headers: PutRepositoryTriggersHeaders = field()
    request: shared.PutRepositoryTriggersInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRepositoryTriggersResponse:
    content_type: str = field()
    status_code: int = field()
    encryption_integrity_checks_failed_exception: Optional[Any] = field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = field(default=None)
    encryption_key_disabled_exception: Optional[Any] = field(default=None)
    encryption_key_not_found_exception: Optional[Any] = field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = field(default=None)
    invalid_repository_name_exception: Optional[Any] = field(default=None)
    invalid_repository_trigger_branch_name_exception: Optional[Any] = field(default=None)
    invalid_repository_trigger_custom_data_exception: Optional[Any] = field(default=None)
    invalid_repository_trigger_destination_arn_exception: Optional[Any] = field(default=None)
    invalid_repository_trigger_events_exception: Optional[Any] = field(default=None)
    invalid_repository_trigger_name_exception: Optional[Any] = field(default=None)
    invalid_repository_trigger_region_exception: Optional[Any] = field(default=None)
    maximum_branches_exceeded_exception: Optional[Any] = field(default=None)
    maximum_repository_triggers_exceeded_exception: Optional[Any] = field(default=None)
    put_repository_triggers_output: Optional[shared.PutRepositoryTriggersOutput] = field(default=None)
    repository_does_not_exist_exception: Optional[Any] = field(default=None)
    repository_name_required_exception: Optional[Any] = field(default=None)
    repository_trigger_branch_name_list_required_exception: Optional[Any] = field(default=None)
    repository_trigger_destination_arn_required_exception: Optional[Any] = field(default=None)
    repository_trigger_events_list_required_exception: Optional[Any] = field(default=None)
    repository_trigger_name_required_exception: Optional[Any] = field(default=None)
    repository_triggers_list_required_exception: Optional[Any] = field(default=None)
    
