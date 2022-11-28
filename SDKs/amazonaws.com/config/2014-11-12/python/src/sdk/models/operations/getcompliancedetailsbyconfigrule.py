from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetComplianceDetailsByConfigRuleQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class GetComplianceDetailsByConfigRuleXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_GET_COMPLIANCE_DETAILS_BY_CONFIG_RULE = "StarlingDoveService.GetComplianceDetailsByConfigRule"


@dataclass
class GetComplianceDetailsByConfigRuleHeaders:
    x_amz_target: GetComplianceDetailsByConfigRuleXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetComplianceDetailsByConfigRuleRequest:
    headers: GetComplianceDetailsByConfigRuleHeaders = field()
    query_params: GetComplianceDetailsByConfigRuleQueryParams = field()
    request: shared.GetComplianceDetailsByConfigRuleRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetComplianceDetailsByConfigRuleResponse:
    content_type: str = field()
    status_code: int = field()
    get_compliance_details_by_config_rule_response: Optional[shared.GetComplianceDetailsByConfigRuleResponse] = field(default=None)
    invalid_next_token_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    no_such_config_rule_exception: Optional[Any] = field(default=None)
    
