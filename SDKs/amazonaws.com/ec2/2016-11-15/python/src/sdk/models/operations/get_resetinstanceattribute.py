from dataclasses import dataclass, field
from typing import Enum,Optional

class GetResetInstanceAttributeActionEnum(str, Enum):
    RESET_INSTANCE_ATTRIBUTE = "ResetInstanceAttribute"

class GetResetInstanceAttributeAttributeEnum(str, Enum):
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

class GetResetInstanceAttributeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetResetInstanceAttributeQueryParams:
    action: GetResetInstanceAttributeActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    attribute: GetResetInstanceAttributeAttributeEnum = field(default=None, metadata={'query_param': { 'field_name': 'Attribute', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    instance_id: str = field(default=None, metadata={'query_param': { 'field_name': 'InstanceId', 'style': 'form', 'explode': True }})
    version: GetResetInstanceAttributeVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetResetInstanceAttributeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetResetInstanceAttributeRequest:
    query_params: GetResetInstanceAttributeQueryParams = field(default=None)
    headers: GetResetInstanceAttributeHeaders = field(default=None)
    

@dataclass
class GetResetInstanceAttributeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
