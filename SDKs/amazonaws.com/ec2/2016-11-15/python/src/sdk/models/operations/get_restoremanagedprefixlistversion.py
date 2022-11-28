from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetRestoreManagedPrefixListVersionActionEnum(str, Enum):
    RESTORE_MANAGED_PREFIX_LIST_VERSION = "RestoreManagedPrefixListVersion"

class GetRestoreManagedPrefixListVersionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetRestoreManagedPrefixListVersionQueryParams:
    action: GetRestoreManagedPrefixListVersionActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    current_version: int = field(metadata={'query_param': { 'field_name': 'CurrentVersion', 'style': 'form', 'explode': True }})
    prefix_list_id: str = field(metadata={'query_param': { 'field_name': 'PrefixListId', 'style': 'form', 'explode': True }})
    previous_version: int = field(metadata={'query_param': { 'field_name': 'PreviousVersion', 'style': 'form', 'explode': True }})
    version: GetRestoreManagedPrefixListVersionVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRestoreManagedPrefixListVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRestoreManagedPrefixListVersionRequest:
    headers: GetRestoreManagedPrefixListVersionHeaders = field()
    query_params: GetRestoreManagedPrefixListVersionQueryParams = field()
    

@dataclass
class GetRestoreManagedPrefixListVersionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
