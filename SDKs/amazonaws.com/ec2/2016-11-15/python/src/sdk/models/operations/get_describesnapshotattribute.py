from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDescribeSnapshotAttributeActionEnum(str, Enum):
    DESCRIBE_SNAPSHOT_ATTRIBUTE = "DescribeSnapshotAttribute"

class GetDescribeSnapshotAttributeAttributeEnum(str, Enum):
    PRODUCT_CODES = "productCodes"
    CREATE_VOLUME_PERMISSION = "createVolumePermission"

class GetDescribeSnapshotAttributeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetDescribeSnapshotAttributeQueryParams:
    action: GetDescribeSnapshotAttributeActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    attribute: GetDescribeSnapshotAttributeAttributeEnum = field(default=None, metadata={'query_param': { 'field_name': 'Attribute', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    snapshot_id: str = field(default=None, metadata={'query_param': { 'field_name': 'SnapshotId', 'style': 'form', 'explode': True }})
    version: GetDescribeSnapshotAttributeVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeSnapshotAttributeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDescribeSnapshotAttributeRequest:
    query_params: GetDescribeSnapshotAttributeQueryParams = field(default=None)
    headers: GetDescribeSnapshotAttributeHeaders = field(default=None)
    

@dataclass
class GetDescribeSnapshotAttributeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
