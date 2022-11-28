from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DeleteOrganizationConfigRuleXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_DELETE_ORGANIZATION_CONFIG_RULE = "StarlingDoveService.DeleteOrganizationConfigRule"


@dataclass
class DeleteOrganizationConfigRuleHeaders:
    x_amz_target: DeleteOrganizationConfigRuleXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOrganizationConfigRuleRequest:
    headers: DeleteOrganizationConfigRuleHeaders = field()
    request: shared.DeleteOrganizationConfigRuleRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteOrganizationConfigRuleResponse:
    content_type: str = field()
    status_code: int = field()
    no_such_organization_config_rule_exception: Optional[Any] = field(default=None)
    organization_access_denied_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    
