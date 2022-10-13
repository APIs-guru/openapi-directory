from dataclasses import dataclass, field
from typing import Enum,Optional

class GetModifyAvailabilityZoneGroupActionEnum(str, Enum):
    MODIFY_AVAILABILITY_ZONE_GROUP = "ModifyAvailabilityZoneGroup"

class GetModifyAvailabilityZoneGroupOptInStatusEnum(str, Enum):
    OPTED_IN = "opted-in"
    NOT_OPTED_IN = "not-opted-in"

class GetModifyAvailabilityZoneGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyAvailabilityZoneGroupQueryParams:
    action: GetModifyAvailabilityZoneGroupActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    group_name: str = field(default=None, metadata={'query_param': { 'field_name': 'GroupName', 'style': 'form', 'explode': True }})
    opt_in_status: GetModifyAvailabilityZoneGroupOptInStatusEnum = field(default=None, metadata={'query_param': { 'field_name': 'OptInStatus', 'style': 'form', 'explode': True }})
    version: GetModifyAvailabilityZoneGroupVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyAvailabilityZoneGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetModifyAvailabilityZoneGroupRequest:
    query_params: GetModifyAvailabilityZoneGroupQueryParams = field(default=None)
    headers: GetModifyAvailabilityZoneGroupHeaders = field(default=None)
    

@dataclass
class GetModifyAvailabilityZoneGroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
