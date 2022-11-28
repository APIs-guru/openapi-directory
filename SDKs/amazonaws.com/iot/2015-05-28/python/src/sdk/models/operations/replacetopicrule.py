from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReplaceTopicRulePathParams:
    rule_name: str = field(metadata={'path_param': { 'field_name': 'ruleName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReplaceTopicRuleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReplaceTopicRuleRequestBodyTopicRulePayload:
    r"""ReplaceTopicRuleRequestBodyTopicRulePayload
    Describes a rule.
    """
    
    actions: Optional[List[shared.Action]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    aws_iot_sql_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsIotSqlVersion') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    error_action: Optional[shared.Action] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorAction') }})
    rule_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleDisabled') }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sql') }})
    

@dataclass_json
@dataclass
class ReplaceTopicRuleRequestBody:
    topic_rule_payload: ReplaceTopicRuleRequestBodyTopicRulePayload = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicRulePayload') }})
    

@dataclass
class ReplaceTopicRuleRequest:
    headers: ReplaceTopicRuleHeaders = field()
    path_params: ReplaceTopicRulePathParams = field()
    request: ReplaceTopicRuleRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReplaceTopicRuleResponse:
    content_type: str = field()
    status_code: int = field()
    conflicting_resource_update_exception: Optional[Any] = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    sql_parse_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
