from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ImportMigrationTaskXAmzTargetEnum(str, Enum):
    AWS_MIGRATION_HUB_IMPORT_MIGRATION_TASK = "AWSMigrationHub.ImportMigrationTask"


@dataclass
class ImportMigrationTaskHeaders:
    x_amz_target: ImportMigrationTaskXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ImportMigrationTaskRequest:
    headers: ImportMigrationTaskHeaders = field()
    request: shared.ImportMigrationTaskRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ImportMigrationTaskResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    dry_run_operation: Optional[Any] = field(default=None)
    home_region_not_set_exception: Optional[Any] = field(default=None)
    import_migration_task_result: Optional[dict[str, Any]] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_operation: Optional[Any] = field(default=None)
    
