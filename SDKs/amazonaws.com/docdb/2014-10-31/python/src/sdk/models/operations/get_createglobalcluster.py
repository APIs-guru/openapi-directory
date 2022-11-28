from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCreateGlobalClusterActionEnum(str, Enum):
    CREATE_GLOBAL_CLUSTER = "CreateGlobalCluster"

class GetCreateGlobalClusterVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FOURTEEN_10_31 = "2014-10-31"


@dataclass
class GetCreateGlobalClusterQueryParams:
    action: GetCreateGlobalClusterActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    global_cluster_identifier: str = field(metadata={'query_param': { 'field_name': 'GlobalClusterIdentifier', 'style': 'form', 'explode': True }})
    version: GetCreateGlobalClusterVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    database_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DatabaseName', 'style': 'form', 'explode': True }})
    deletion_protection: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DeletionProtection', 'style': 'form', 'explode': True }})
    engine: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Engine', 'style': 'form', 'explode': True }})
    engine_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EngineVersion', 'style': 'form', 'explode': True }})
    source_db_cluster_identifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SourceDBClusterIdentifier', 'style': 'form', 'explode': True }})
    storage_encrypted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'StorageEncrypted', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateGlobalClusterHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCreateGlobalClusterRequest:
    headers: GetCreateGlobalClusterHeaders = field()
    query_params: GetCreateGlobalClusterQueryParams = field()
    

@dataclass
class GetCreateGlobalClusterResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
