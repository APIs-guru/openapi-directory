from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDescribeInstanceAttributeActionEnum(str, Enum):
    DESCRIBE_INSTANCE_ATTRIBUTE = "DescribeInstanceAttribute"

class GetDescribeInstanceAttributeAttributeEnum(str, Enum):
    INSTANCE_TYPE = "instanceType"
    KERNEL = "kernel"
    RAMDISK = "ramdisk"
    USER_DATA = "userData"
    DISABLE_API_TERMINATION = "disableApiTermination"
    INSTANCE_INITIATED_SHUTDOWN_BEHAVIOR = "instanceInitiatedShutdownBehavior"
    ROOT_DEVICE_NAME = "rootDeviceName"
    BLOCK_DEVICE_MAPPING = "blockDeviceMapping"
    PRODUCT_CODES = "productCodes"
    SOURCE_DEST_CHECK = "sourceDestCheck"
    GROUP_SET = "groupSet"
    EBS_OPTIMIZED = "ebsOptimized"
    SRIOV_NET_SUPPORT = "sriovNetSupport"
    ENA_SUPPORT = "enaSupport"
    ENCLAVE_OPTIONS = "enclaveOptions"

class GetDescribeInstanceAttributeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetDescribeInstanceAttributeQueryParams:
    action: GetDescribeInstanceAttributeActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    attribute: GetDescribeInstanceAttributeAttributeEnum = field(default=None, metadata={'query_param': { 'field_name': 'Attribute', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    instance_id: str = field(default=None, metadata={'query_param': { 'field_name': 'InstanceId', 'style': 'form', 'explode': True }})
    version: GetDescribeInstanceAttributeVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeInstanceAttributeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDescribeInstanceAttributeRequest:
    query_params: GetDescribeInstanceAttributeQueryParams = field(default=None)
    headers: GetDescribeInstanceAttributeHeaders = field(default=None)
    

@dataclass
class GetDescribeInstanceAttributeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
