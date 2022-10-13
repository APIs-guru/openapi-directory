from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDescribeImageAttributeActionEnum(str, Enum):
    DESCRIBE_IMAGE_ATTRIBUTE = "DescribeImageAttribute"

class GetDescribeImageAttributeAttributeEnum(str, Enum):
    DESCRIPTION = "description"
    KERNEL = "kernel"
    RAMDISK = "ramdisk"
    LAUNCH_PERMISSION = "launchPermission"
    PRODUCT_CODES = "productCodes"
    BLOCK_DEVICE_MAPPING = "blockDeviceMapping"
    SRIOV_NET_SUPPORT = "sriovNetSupport"
    BOOT_MODE = "bootMode"

class GetDescribeImageAttributeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetDescribeImageAttributeQueryParams:
    action: GetDescribeImageAttributeActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    attribute: GetDescribeImageAttributeAttributeEnum = field(default=None, metadata={'query_param': { 'field_name': 'Attribute', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    image_id: str = field(default=None, metadata={'query_param': { 'field_name': 'ImageId', 'style': 'form', 'explode': True }})
    version: GetDescribeImageAttributeVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeImageAttributeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDescribeImageAttributeRequest:
    query_params: GetDescribeImageAttributeQueryParams = field(default=None)
    headers: GetDescribeImageAttributeHeaders = field(default=None)
    

@dataclass
class GetDescribeImageAttributeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
