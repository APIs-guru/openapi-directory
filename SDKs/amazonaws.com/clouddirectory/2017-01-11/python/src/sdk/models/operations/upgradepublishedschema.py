from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpgradePublishedSchemaHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpgradePublishedSchemaRequestBody:
    development_schema_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DevelopmentSchemaArn') }})
    minor_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinorVersion') }})
    published_schema_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublishedSchemaArn') }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DryRun') }})
    

@dataclass
class UpgradePublishedSchemaRequest:
    headers: UpgradePublishedSchemaHeaders = field()
    request: UpgradePublishedSchemaRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpgradePublishedSchemaResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    incompatible_schema_exception: Optional[Any] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_arn_exception: Optional[Any] = field(default=None)
    invalid_attachment_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    retryable_conflict_exception: Optional[Any] = field(default=None)
    upgrade_published_schema_response: Optional[shared.UpgradePublishedSchemaResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
