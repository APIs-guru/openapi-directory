from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetModifyDbInstanceActionEnum(str, Enum):
    MODIFY_DB_INSTANCE = "ModifyDBInstance"

class GetModifyDbInstanceVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetModifyDbInstanceQueryParams:
    action: GetModifyDbInstanceActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    db_instance_identifier: str = field(metadata={'query_param': { 'field_name': 'DBInstanceIdentifier', 'style': 'form', 'explode': True }})
    version: GetModifyDbInstanceVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    apply_immediately: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ApplyImmediately', 'style': 'form', 'explode': True }})
    auto_minor_version_upgrade: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'AutoMinorVersionUpgrade', 'style': 'form', 'explode': True }})
    ca_certificate_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CACertificateIdentifier', 'style': 'form', 'explode': True }})
    db_instance_class: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DBInstanceClass', 'style': 'form', 'explode': True }})
    new_db_instance_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NewDBInstanceIdentifier', 'style': 'form', 'explode': True }})
    preferred_maintenance_window: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PreferredMaintenanceWindow', 'style': 'form', 'explode': True }})
    promotion_tier: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PromotionTier', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyDbInstanceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyDbInstanceRequest:
    headers: GetModifyDbInstanceHeaders = field()
    query_params: GetModifyDbInstanceQueryParams = field()
    

@dataclass
class GetModifyDbInstanceResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
