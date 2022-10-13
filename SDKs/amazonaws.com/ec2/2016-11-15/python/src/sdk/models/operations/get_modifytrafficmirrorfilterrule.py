from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetModifyTrafficMirrorFilterRuleActionEnum(str, Enum):
    MODIFY_TRAFFIC_MIRROR_FILTER_RULE = "ModifyTrafficMirrorFilterRule"


@dataclass
class GetModifyTrafficMirrorFilterRuleDestinationPortRange:
    from_port: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'FromPort' }})
    to_port: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'ToPort' }})
    
class GetModifyTrafficMirrorFilterRuleRuleActionEnum(str, Enum):
    ACCEPT = "accept"
    REJECT = "reject"


@dataclass
class GetModifyTrafficMirrorFilterRuleSourcePortRange:
    from_port: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'FromPort' }})
    to_port: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'ToPort' }})
    
class GetModifyTrafficMirrorFilterRuleTrafficDirectionEnum(str, Enum):
    INGRESS = "ingress"
    EGRESS = "egress"

class GetModifyTrafficMirrorFilterRuleVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyTrafficMirrorFilterRuleQueryParams:
    action: GetModifyTrafficMirrorFilterRuleActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Description', 'style': 'form', 'explode': True }})
    destination_cidr_block: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DestinationCidrBlock', 'style': 'form', 'explode': True }})
    destination_port_range: Optional[GetModifyTrafficMirrorFilterRuleDestinationPortRange] = field(default=None, metadata={'query_param': { 'field_name': 'DestinationPortRange', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    protocol: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Protocol', 'style': 'form', 'explode': True }})
    remove_field: Optional[List[shared.TrafficMirrorFilterRuleFieldEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'RemoveField', 'style': 'form', 'explode': True }})
    rule_action: Optional[GetModifyTrafficMirrorFilterRuleRuleActionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'RuleAction', 'style': 'form', 'explode': True }})
    rule_number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'RuleNumber', 'style': 'form', 'explode': True }})
    source_cidr_block: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SourceCidrBlock', 'style': 'form', 'explode': True }})
    source_port_range: Optional[GetModifyTrafficMirrorFilterRuleSourcePortRange] = field(default=None, metadata={'query_param': { 'field_name': 'SourcePortRange', 'style': 'form', 'explode': True }})
    traffic_direction: Optional[GetModifyTrafficMirrorFilterRuleTrafficDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'TrafficDirection', 'style': 'form', 'explode': True }})
    traffic_mirror_filter_rule_id: str = field(default=None, metadata={'query_param': { 'field_name': 'TrafficMirrorFilterRuleId', 'style': 'form', 'explode': True }})
    version: GetModifyTrafficMirrorFilterRuleVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyTrafficMirrorFilterRuleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetModifyTrafficMirrorFilterRuleRequest:
    query_params: GetModifyTrafficMirrorFilterRuleQueryParams = field(default=None)
    headers: GetModifyTrafficMirrorFilterRuleHeaders = field(default=None)
    

@dataclass
class GetModifyTrafficMirrorFilterRuleResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
