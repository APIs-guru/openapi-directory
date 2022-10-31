from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class BatchDeleteImportDataXAmzTargetEnum(str, Enum):
    AWS_POSEIDON_SERVICE_V2015_11_01_BATCH_DELETE_IMPORT_DATA = "AWSPoseidonService_V2015_11_01.BatchDeleteImportData"


@dataclass
class BatchDeleteImportDataHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: BatchDeleteImportDataXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatchDeleteImportDataRequest:
    headers: BatchDeleteImportDataHeaders = field(default=None)
    request: shared.BatchDeleteImportDataRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchDeleteImportDataResponse:
    authorization_error_exception: Optional[Any] = field(default=None)
    batch_delete_import_data_response: Optional[shared.BatchDeleteImportDataResponse] = field(default=None)
    content_type: str = field(default=None)
    home_region_not_set_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    server_internal_error_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
