from dataclasses import dataclass, field
from typing import Enum,Optional

class GetModifyVolumeAttributeActionEnum(str, Enum):
    MODIFY_VOLUME_ATTRIBUTE = "ModifyVolumeAttribute"


@dataclass
class GetModifyVolumeAttributeAutoEnableIo:
    value: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Value' }})
    
class GetModifyVolumeAttributeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyVolumeAttributeQueryParams:
    action: GetModifyVolumeAttributeActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    auto_enable_io: Optional[GetModifyVolumeAttributeAutoEnableIo] = field(default=None, metadata={'query_param': { 'field_name': 'AutoEnableIO', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    version: GetModifyVolumeAttributeVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    volume_id: str = field(default=None, metadata={'query_param': { 'field_name': 'VolumeId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyVolumeAttributeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetModifyVolumeAttributeRequest:
    query_params: GetModifyVolumeAttributeQueryParams = field(default=None)
    headers: GetModifyVolumeAttributeHeaders = field(default=None)
    

@dataclass
class GetModifyVolumeAttributeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
