from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class PutSchemaVersionMetadataXAmzTargetEnum(str, Enum):
    AWS_GLUE_PUT_SCHEMA_VERSION_METADATA = "AWSGlue.PutSchemaVersionMetadata"


@dataclass
class PutSchemaVersionMetadataHeaders:
    x_amz_target: PutSchemaVersionMetadataXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSchemaVersionMetadataRequest:
    headers: PutSchemaVersionMetadataHeaders = field()
    request: shared.PutSchemaVersionMetadataInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutSchemaVersionMetadataResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    already_exists_exception: Optional[Any] = field(default=None)
    entity_not_found_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    put_schema_version_metadata_response: Optional[shared.PutSchemaVersionMetadataResponse] = field(default=None)
    resource_number_limit_exceeded_exception: Optional[Any] = field(default=None)
    
