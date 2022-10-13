from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateTopicRulePathParams:
    rule_name: str = field(default=None, metadata={'path_param': { 'field_name': 'ruleName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTopicRuleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_tagging: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-amz-tagging' }})
    

@dataclass_json
@dataclass
class CreateTopicRuleRequestBodyTopicRulePayload:
    actions: Optional[List[shared.Action]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    aws_iot_sql_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsIotSqlVersion' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    error_action: Optional[shared.Action] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorAction' }})
    rule_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleDisabled' }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sql' }})
    

@dataclass_json
@dataclass
class CreateTopicRuleRequestBody:
    topic_rule_payload: CreateTopicRuleRequestBodyTopicRulePayload = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topicRulePayload' }})
    

@dataclass
class CreateTopicRuleRequest:
    path_params: CreateTopicRulePathParams = field(default=None)
    headers: CreateTopicRuleHeaders = field(default=None)
    request: CreateTopicRuleRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateTopicRuleResponse:
    conflicting_resource_update_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    sql_parse_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
