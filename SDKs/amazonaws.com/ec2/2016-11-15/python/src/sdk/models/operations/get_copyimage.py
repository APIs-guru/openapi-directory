from dataclasses import dataclass, field
from typing import Enum,Optional

class GetCopyImageActionEnum(str, Enum):
    COPY_IMAGE = "CopyImage"

class GetCopyImageVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetCopyImageQueryParams:
    action: GetCopyImageActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    client_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ClientToken', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Description', 'style': 'form', 'explode': True }})
    destination_outpost_arn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DestinationOutpostArn', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    encrypted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Encrypted', 'style': 'form', 'explode': True }})
    kms_key_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'KmsKeyId', 'style': 'form', 'explode': True }})
    name: str = field(default=None, metadata={'query_param': { 'field_name': 'Name', 'style': 'form', 'explode': True }})
    source_image_id: str = field(default=None, metadata={'query_param': { 'field_name': 'SourceImageId', 'style': 'form', 'explode': True }})
    source_region: str = field(default=None, metadata={'query_param': { 'field_name': 'SourceRegion', 'style': 'form', 'explode': True }})
    version: GetCopyImageVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCopyImageHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetCopyImageRequest:
    query_params: GetCopyImageQueryParams = field(default=None)
    headers: GetCopyImageHeaders = field(default=None)
    

@dataclass
class GetCopyImageResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
