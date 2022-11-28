from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class UntagResourceXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_UNTAG_RESOURCE = "CodeCommit_20150413.UntagResource"


@dataclass
class UntagResourceHeaders:
    x_amz_target: UntagResourceXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class UntagResourceRequest:
    headers: UntagResourceHeaders = field()
    request: shared.UntagResourceInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UntagResourceResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_repository_name_exception: Optional[Any] = field(default=None)
    invalid_resource_arn_exception: Optional[Any] = field(default=None)
    invalid_system_tag_usage_exception: Optional[Any] = field(default=None)
    invalid_tag_keys_list_exception: Optional[Any] = field(default=None)
    repository_does_not_exist_exception: Optional[Any] = field(default=None)
    resource_arn_required_exception: Optional[Any] = field(default=None)
    tag_keys_list_required_exception: Optional[Any] = field(default=None)
    tag_policy_exception: Optional[Any] = field(default=None)
    too_many_tags_exception: Optional[Any] = field(default=None)
    
