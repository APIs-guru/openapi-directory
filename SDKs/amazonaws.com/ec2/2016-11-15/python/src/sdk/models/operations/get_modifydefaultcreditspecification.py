from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetModifyDefaultCreditSpecificationActionEnum(str, Enum):
    MODIFY_DEFAULT_CREDIT_SPECIFICATION = "ModifyDefaultCreditSpecification"

class GetModifyDefaultCreditSpecificationInstanceFamilyEnum(str, Enum):
    T2 = "t2"
    T3 = "t3"
    T3A = "t3a"
    T4G = "t4g"

class GetModifyDefaultCreditSpecificationVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyDefaultCreditSpecificationQueryParams:
    action: GetModifyDefaultCreditSpecificationActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cpu_credits: str = field(metadata={'query_param': { 'field_name': 'CpuCredits', 'style': 'form', 'explode': True }})
    instance_family: GetModifyDefaultCreditSpecificationInstanceFamilyEnum = field(metadata={'query_param': { 'field_name': 'InstanceFamily', 'style': 'form', 'explode': True }})
    version: GetModifyDefaultCreditSpecificationVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyDefaultCreditSpecificationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyDefaultCreditSpecificationRequest:
    headers: GetModifyDefaultCreditSpecificationHeaders = field()
    query_params: GetModifyDefaultCreditSpecificationQueryParams = field()
    

@dataclass
class GetModifyDefaultCreditSpecificationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
