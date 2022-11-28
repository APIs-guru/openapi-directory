from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class AssociateConfigurationItemsToApplicationXAmzTargetEnum(str, Enum):
    AWS_POSEIDON_SERVICE_V2015_11_01_ASSOCIATE_CONFIGURATION_ITEMS_TO_APPLICATION = "AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication"


@dataclass
class AssociateConfigurationItemsToApplicationHeaders:
    x_amz_target: AssociateConfigurationItemsToApplicationXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssociateConfigurationItemsToApplicationRequest:
    headers: AssociateConfigurationItemsToApplicationHeaders = field()
    request: shared.AssociateConfigurationItemsToApplicationRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssociateConfigurationItemsToApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    associate_configuration_items_to_application_response: Optional[dict[str, Any]] = field(default=None)
    authorization_error_exception: Optional[Any] = field(default=None)
    home_region_not_set_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    server_internal_error_exception: Optional[Any] = field(default=None)
    
