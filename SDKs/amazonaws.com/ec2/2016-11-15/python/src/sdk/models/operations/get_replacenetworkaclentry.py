from dataclasses import dataclass, field
from typing import Enum,Optional

class GetReplaceNetworkACLEntryActionEnum(str, Enum):
    REPLACE_NETWORK_ACL_ENTRY = "ReplaceNetworkAclEntry"


@dataclass
class GetReplaceNetworkACLEntryIcmp:
    code: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Code' }})
    type: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Type' }})
    

@dataclass
class GetReplaceNetworkACLEntryPortRange:
    from_: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'From' }})
    to: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'To' }})
    
class GetReplaceNetworkACLEntryRuleActionEnum(str, Enum):
    ALLOW = "allow"
    DENY = "deny"

class GetReplaceNetworkACLEntryVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetReplaceNetworkACLEntryQueryParams:
    action: GetReplaceNetworkACLEntryActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    cidr_block: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CidrBlock', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    egress: bool = field(default=None, metadata={'query_param': { 'field_name': 'Egress', 'style': 'form', 'explode': True }})
    icmp: Optional[GetReplaceNetworkACLEntryIcmp] = field(default=None, metadata={'query_param': { 'field_name': 'Icmp', 'style': 'form', 'explode': True }})
    ipv6_cidr_block: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Ipv6CidrBlock', 'style': 'form', 'explode': True }})
    network_acl_id: str = field(default=None, metadata={'query_param': { 'field_name': 'NetworkAclId', 'style': 'form', 'explode': True }})
    port_range: Optional[GetReplaceNetworkACLEntryPortRange] = field(default=None, metadata={'query_param': { 'field_name': 'PortRange', 'style': 'form', 'explode': True }})
    protocol: str = field(default=None, metadata={'query_param': { 'field_name': 'Protocol', 'style': 'form', 'explode': True }})
    rule_action: GetReplaceNetworkACLEntryRuleActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'RuleAction', 'style': 'form', 'explode': True }})
    rule_number: int = field(default=None, metadata={'query_param': { 'field_name': 'RuleNumber', 'style': 'form', 'explode': True }})
    version: GetReplaceNetworkACLEntryVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetReplaceNetworkACLEntryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReplaceNetworkACLEntryRequest:
    query_params: GetReplaceNetworkACLEntryQueryParams = field(default=None)
    headers: GetReplaceNetworkACLEntryHeaders = field(default=None)
    

@dataclass
class GetReplaceNetworkACLEntryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
