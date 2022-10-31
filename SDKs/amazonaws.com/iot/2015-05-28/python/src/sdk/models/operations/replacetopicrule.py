from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReplaceTopicRulePathParams:
    rule_name: str = field(default=None, metadata={'path_param': { 'field_name': 'ruleName', 'style': 'simple', 'explode': False }})
    

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
    actions: Optional[List[shared.Action]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    aws_iot_sql_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsIotSqlVersion' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    error_action: Optional[shared.Action] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorAction' }})
    rule_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleDisabled' }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sql' }})
    

@dataclass_json
@dataclass
class ReplaceTopicRuleRequestBody:
    topic_rule_payload: ReplaceTopicRuleRequestBodyTopicRulePayload = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topicRulePayload' }})
    

@dataclass
class ReplaceTopicRuleRequest:
    path_params: ReplaceTopicRulePathParams = field(default=None)
    headers: ReplaceTopicRuleHeaders = field(default=None)
    request: ReplaceTopicRuleRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReplaceTopicRuleResponse:
    conflicting_resource_update_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    sql_parse_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
