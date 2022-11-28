from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class PutConfigurationAggregatorXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_PUT_CONFIGURATION_AGGREGATOR = "StarlingDoveService.PutConfigurationAggregator"


@dataclass
class PutConfigurationAggregatorHeaders:
    x_amz_target: PutConfigurationAggregatorXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutConfigurationAggregatorRequest:
    headers: PutConfigurationAggregatorHeaders = field()
    request: shared.PutConfigurationAggregatorRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutConfigurationAggregatorResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    invalid_role_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    no_available_organization_exception: Optional[Any] = field(default=None)
    organization_access_denied_exception: Optional[Any] = field(default=None)
    organization_all_features_not_enabled_exception: Optional[Any] = field(default=None)
    put_configuration_aggregator_response: Optional[shared.PutConfigurationAggregatorResponse] = field(default=None)
    
