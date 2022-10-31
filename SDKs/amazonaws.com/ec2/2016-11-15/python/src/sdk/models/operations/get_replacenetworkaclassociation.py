from dataclasses import dataclass, field
from typing import Enum,Optional

class GetReplaceNetworkACLAssociationActionEnum(str, Enum):
    REPLACE_NETWORK_ACL_ASSOCIATION = "ReplaceNetworkAclAssociation"

class GetReplaceNetworkACLAssociationVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetReplaceNetworkACLAssociationQueryParams:
    action: GetReplaceNetworkACLAssociationActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    association_id: str = field(default=None, metadata={'query_param': { 'field_name': 'AssociationId', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    network_acl_id: str = field(default=None, metadata={'query_param': { 'field_name': 'NetworkAclId', 'style': 'form', 'explode': True }})
    version: GetReplaceNetworkACLAssociationVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetReplaceNetworkACLAssociationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReplaceNetworkACLAssociationRequest:
    query_params: GetReplaceNetworkACLAssociationQueryParams = field(default=None)
    headers: GetReplaceNetworkACLAssociationHeaders = field(default=None)
    

@dataclass
class GetReplaceNetworkACLAssociationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
