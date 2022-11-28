from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DescribeMergeConflictsQueryParams:
    max_merge_hunks: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxMergeHunks', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class DescribeMergeConflictsXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_DESCRIBE_MERGE_CONFLICTS = "CodeCommit_20150413.DescribeMergeConflicts"


@dataclass
class DescribeMergeConflictsHeaders:
    x_amz_target: DescribeMergeConflictsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeMergeConflictsRequest:
    headers: DescribeMergeConflictsHeaders = field()
    query_params: DescribeMergeConflictsQueryParams = field()
    request: shared.DescribeMergeConflictsInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeMergeConflictsResponse:
    content_type: str = field()
    status_code: int = field()
    commit_does_not_exist_exception: Optional[Any] = field(default=None)
    commit_required_exception: Optional[Any] = field(default=None)
    describe_merge_conflicts_output: Optional[shared.DescribeMergeConflictsOutput] = field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = field(default=None)
    encryption_key_disabled_exception: Optional[Any] = field(default=None)
    encryption_key_not_found_exception: Optional[Any] = field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = field(default=None)
    file_does_not_exist_exception: Optional[Any] = field(default=None)
    invalid_commit_exception: Optional[Any] = field(default=None)
    invalid_conflict_detail_level_exception: Optional[Any] = field(default=None)
    invalid_conflict_resolution_strategy_exception: Optional[Any] = field(default=None)
    invalid_continuation_token_exception: Optional[Any] = field(default=None)
    invalid_max_merge_hunks_exception: Optional[Any] = field(default=None)
    invalid_merge_option_exception: Optional[Any] = field(default=None)
    invalid_path_exception: Optional[Any] = field(default=None)
    invalid_repository_name_exception: Optional[Any] = field(default=None)
    maximum_file_content_to_load_exceeded_exception: Optional[Any] = field(default=None)
    maximum_items_to_compare_exceeded_exception: Optional[Any] = field(default=None)
    merge_option_required_exception: Optional[Any] = field(default=None)
    path_required_exception: Optional[Any] = field(default=None)
    repository_does_not_exist_exception: Optional[Any] = field(default=None)
    repository_name_required_exception: Optional[Any] = field(default=None)
    tips_divergence_exceeded_exception: Optional[Any] = field(default=None)
    
