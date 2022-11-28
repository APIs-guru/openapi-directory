from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetSwapEnvironmentCnamEsActionEnum(str, Enum):
    SWAP_ENVIRONMENT_CNAM_ES = "SwapEnvironmentCNAMEs"

class GetSwapEnvironmentCnamEsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetSwapEnvironmentCnamEsQueryParams:
    action: GetSwapEnvironmentCnamEsActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetSwapEnvironmentCnamEsVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    destination_environment_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DestinationEnvironmentId', 'style': 'form', 'explode': True }})
    destination_environment_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DestinationEnvironmentName', 'style': 'form', 'explode': True }})
    source_environment_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SourceEnvironmentId', 'style': 'form', 'explode': True }})
    source_environment_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SourceEnvironmentName', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSwapEnvironmentCnamEsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSwapEnvironmentCnamEsRequest:
    headers: GetSwapEnvironmentCnamEsHeaders = field()
    query_params: GetSwapEnvironmentCnamEsQueryParams = field()
    

@dataclass
class GetSwapEnvironmentCnamEsResponse:
    content_type: str = field()
    status_code: int = field()
    
