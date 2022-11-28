from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DescribeGlobalTableSettingsXAmzTargetEnum(str, Enum):
    DYNAMO_DB_20120810_DESCRIBE_GLOBAL_TABLE_SETTINGS = "DynamoDB_20120810.DescribeGlobalTableSettings"


@dataclass
class DescribeGlobalTableSettingsHeaders:
    x_amz_target: DescribeGlobalTableSettingsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeGlobalTableSettingsRequest:
    headers: DescribeGlobalTableSettingsHeaders = field()
    request: shared.DescribeGlobalTableSettingsInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeGlobalTableSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    describe_global_table_settings_output: Optional[shared.DescribeGlobalTableSettingsOutput] = field(default=None)
    global_table_not_found_exception: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    
