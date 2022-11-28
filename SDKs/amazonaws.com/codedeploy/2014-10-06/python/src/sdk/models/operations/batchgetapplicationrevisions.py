from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class BatchGetApplicationRevisionsXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_BATCH_GET_APPLICATION_REVISIONS = "CodeDeploy_20141006.BatchGetApplicationRevisions"


@dataclass
class BatchGetApplicationRevisionsHeaders:
    x_amz_target: BatchGetApplicationRevisionsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatchGetApplicationRevisionsRequest:
    headers: BatchGetApplicationRevisionsHeaders = field()
    request: shared.BatchGetApplicationRevisionsInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchGetApplicationRevisionsResponse:
    content_type: str = field()
    status_code: int = field()
    application_does_not_exist_exception: Optional[Any] = field(default=None)
    application_name_required_exception: Optional[Any] = field(default=None)
    batch_get_application_revisions_output: Optional[shared.BatchGetApplicationRevisionsOutput] = field(default=None)
    batch_limit_exceeded_exception: Optional[Any] = field(default=None)
    invalid_application_name_exception: Optional[Any] = field(default=None)
    invalid_revision_exception: Optional[Any] = field(default=None)
    revision_required_exception: Optional[Any] = field(default=None)
    
