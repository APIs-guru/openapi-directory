from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetImportVolumeActionEnum(str, Enum):
    IMPORT_VOLUME = "ImportVolume"


@dataclass
class GetImportVolumeImage:
    bytes: int = field(default=None, metadata={'query_param': { 'field_name': 'Bytes' }})
    format: shared.DiskImageFormatEnum = field(default=None, metadata={'query_param': { 'field_name': 'Format' }})
    import_manifest_url: str = field(default=None, metadata={'query_param': { 'field_name': 'ImportManifestUrl' }})
    
class GetImportVolumeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetImportVolumeVolume:
    size: int = field(default=None, metadata={'query_param': { 'field_name': 'Size' }})
    

@dataclass
class GetImportVolumeQueryParams:
    action: GetImportVolumeActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    availability_zone: str = field(default=None, metadata={'query_param': { 'field_name': 'AvailabilityZone', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Description', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    image: GetImportVolumeImage = field(default=None, metadata={'query_param': { 'field_name': 'Image', 'style': 'form', 'explode': True }})
    version: GetImportVolumeVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    volume: GetImportVolumeVolume = field(default=None, metadata={'query_param': { 'field_name': 'Volume', 'style': 'form', 'explode': True }})
    

@dataclass
class GetImportVolumeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetImportVolumeRequest:
    query_params: GetImportVolumeQueryParams = field(default=None)
    headers: GetImportVolumeHeaders = field(default=None)
    

@dataclass
class GetImportVolumeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
