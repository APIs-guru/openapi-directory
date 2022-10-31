from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeleteReportGroupXAmzTargetEnum(str, Enum):
    CODE_BUILD_20161006_DELETE_REPORT_GROUP = "CodeBuild_20161006.DeleteReportGroup"


@dataclass
class DeleteReportGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DeleteReportGroupXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteReportGroupRequest:
    headers: DeleteReportGroupHeaders = field(default=None)
    request: shared.DeleteReportGroupInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteReportGroupResponse:
    content_type: str = field(default=None)
    delete_report_group_output: Optional[dict[str, Any]] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
