from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCreateNetworkACLEntryActionEnum(str, Enum):
    CREATE_NETWORK_ACL_ENTRY = "CreateNetworkAclEntry"


@dataclass
class GetCreateNetworkACLEntryIcmp:
    r"""GetCreateNetworkACLEntryIcmp
    Describes the ICMP type and code.
    """
    
    code: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Code' }})
    type: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Type' }})
    

@dataclass
class GetCreateNetworkACLEntryPortRange:
    r"""GetCreateNetworkACLEntryPortRange
    Describes a range of ports.
    """
    
    from_: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'From' }})
    to: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'To' }})
    
class GetCreateNetworkACLEntryRuleActionEnum(str, Enum):
    ALLOW = "allow"
    DENY = "deny"

class GetCreateNetworkACLEntryVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetCreateNetworkACLEntryQueryParams:
    action: GetCreateNetworkACLEntryActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    egress: bool = field(metadata={'query_param': { 'field_name': 'Egress', 'style': 'form', 'explode': True }})
    network_acl_id: str = field(metadata={'query_param': { 'field_name': 'NetworkAclId', 'style': 'form', 'explode': True }})
    protocol: str = field(metadata={'query_param': { 'field_name': 'Protocol', 'style': 'form', 'explode': True }})
    rule_action: GetCreateNetworkACLEntryRuleActionEnum = field(metadata={'query_param': { 'field_name': 'RuleAction', 'style': 'form', 'explode': True }})
    rule_number: int = field(metadata={'query_param': { 'field_name': 'RuleNumber', 'style': 'form', 'explode': True }})
    version: GetCreateNetworkACLEntryVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    cidr_block: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CidrBlock', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    icmp: Optional[GetCreateNetworkACLEntryIcmp] = field(default=None, metadata={'query_param': { 'field_name': 'Icmp', 'style': 'form', 'explode': True }})
    ipv6_cidr_block: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Ipv6CidrBlock', 'style': 'form', 'explode': True }})
    port_range: Optional[GetCreateNetworkACLEntryPortRange] = field(default=None, metadata={'query_param': { 'field_name': 'PortRange', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateNetworkACLEntryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCreateNetworkACLEntryRequest:
    headers: GetCreateNetworkACLEntryHeaders = field()
    query_params: GetCreateNetworkACLEntryQueryParams = field()
    

@dataclass
class GetCreateNetworkACLEntryResponse:
    content_type: str = field()
    status_code: int = field()
    
