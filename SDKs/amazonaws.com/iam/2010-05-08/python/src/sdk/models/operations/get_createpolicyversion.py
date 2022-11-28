from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCreatePolicyVersionActionEnum(str, Enum):
    CREATE_POLICY_VERSION = "CreatePolicyVersion"

class GetCreatePolicyVersionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetCreatePolicyVersionQueryParams:
    action: GetCreatePolicyVersionActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    policy_arn: str = field(metadata={'query_param': { 'field_name': 'PolicyArn', 'style': 'form', 'explode': True }})
    policy_document: str = field(metadata={'query_param': { 'field_name': 'PolicyDocument', 'style': 'form', 'explode': True }})
    version: GetCreatePolicyVersionVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    set_as_default: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'SetAsDefault', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreatePolicyVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCreatePolicyVersionRequest:
    headers: GetCreatePolicyVersionHeaders = field()
    query_params: GetCreatePolicyVersionQueryParams = field()
    

@dataclass
class GetCreatePolicyVersionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
