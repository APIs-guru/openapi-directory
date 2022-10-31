from dataclasses import dataclass, field
from typing import Enum,Optional

class GetResetFpgaImageAttributeActionEnum(str, Enum):
    RESET_FPGA_IMAGE_ATTRIBUTE = "ResetFpgaImageAttribute"

class GetResetFpgaImageAttributeAttributeEnum(str, Enum):
    LOAD_PERMISSION = "loadPermission"

class GetResetFpgaImageAttributeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetResetFpgaImageAttributeQueryParams:
    action: GetResetFpgaImageAttributeActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    attribute: Optional[GetResetFpgaImageAttributeAttributeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Attribute', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    fpga_image_id: str = field(default=None, metadata={'query_param': { 'field_name': 'FpgaImageId', 'style': 'form', 'explode': True }})
    version: GetResetFpgaImageAttributeVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetResetFpgaImageAttributeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResetFpgaImageAttributeRequest:
    query_params: GetResetFpgaImageAttributeQueryParams = field(default=None)
    headers: GetResetFpgaImageAttributeHeaders = field(default=None)
    

@dataclass
class GetResetFpgaImageAttributeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
