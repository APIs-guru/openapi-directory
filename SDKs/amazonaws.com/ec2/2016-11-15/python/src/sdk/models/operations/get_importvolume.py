from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetImportVolumeActionEnum(str, Enum):
    IMPORT_VOLUME = "ImportVolume"


@dataclass
class GetImportVolumeImage:
    r"""GetImportVolumeImage
    Describes a disk image.
    """
    
    bytes: int = field(metadata={'query_param': { 'field_name': 'Bytes' }})
    format: shared.DiskImageFormatEnum = field(metadata={'query_param': { 'field_name': 'Format' }})
    import_manifest_url: str = field(metadata={'query_param': { 'field_name': 'ImportManifestUrl' }})
    
class GetImportVolumeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetImportVolumeVolume:
    r"""GetImportVolumeVolume
    Describes an EBS volume.
    """
    
    size: int = field(metadata={'query_param': { 'field_name': 'Size' }})
    

@dataclass
class GetImportVolumeQueryParams:
    action: GetImportVolumeActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    availability_zone: str = field(metadata={'query_param': { 'field_name': 'AvailabilityZone', 'style': 'form', 'explode': True }})
    image: GetImportVolumeImage = field(metadata={'query_param': { 'field_name': 'Image', 'style': 'form', 'explode': True }})
    version: GetImportVolumeVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    volume: GetImportVolumeVolume = field(metadata={'query_param': { 'field_name': 'Volume', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Description', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    

@dataclass
class GetImportVolumeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetImportVolumeRequest:
    headers: GetImportVolumeHeaders = field()
    query_params: GetImportVolumeQueryParams = field()
    

@dataclass
class GetImportVolumeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
