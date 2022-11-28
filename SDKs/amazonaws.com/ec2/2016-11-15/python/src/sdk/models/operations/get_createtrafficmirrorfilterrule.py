from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCreateTrafficMirrorFilterRuleActionEnum(str, Enum):
    CREATE_TRAFFIC_MIRROR_FILTER_RULE = "CreateTrafficMirrorFilterRule"


@dataclass
class GetCreateTrafficMirrorFilterRuleDestinationPortRange:
    r"""GetCreateTrafficMirrorFilterRuleDestinationPortRange
    Information about the Traffic Mirror filter rule port range.
    """
    
    from_port: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'FromPort' }})
    to_port: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'ToPort' }})
    
class GetCreateTrafficMirrorFilterRuleRuleActionEnum(str, Enum):
    ACCEPT = "accept"
    REJECT = "reject"


@dataclass
class GetCreateTrafficMirrorFilterRuleSourcePortRange:
    r"""GetCreateTrafficMirrorFilterRuleSourcePortRange
    Information about the Traffic Mirror filter rule port range.
    """
    
    from_port: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'FromPort' }})
    to_port: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'ToPort' }})
    
class GetCreateTrafficMirrorFilterRuleTrafficDirectionEnum(str, Enum):
    INGRESS = "ingress"
    EGRESS = "egress"

class GetCreateTrafficMirrorFilterRuleVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetCreateTrafficMirrorFilterRuleQueryParams:
    action: GetCreateTrafficMirrorFilterRuleActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    destination_cidr_block: str = field(metadata={'query_param': { 'field_name': 'DestinationCidrBlock', 'style': 'form', 'explode': True }})
    rule_action: GetCreateTrafficMirrorFilterRuleRuleActionEnum = field(metadata={'query_param': { 'field_name': 'RuleAction', 'style': 'form', 'explode': True }})
    rule_number: int = field(metadata={'query_param': { 'field_name': 'RuleNumber', 'style': 'form', 'explode': True }})
    source_cidr_block: str = field(metadata={'query_param': { 'field_name': 'SourceCidrBlock', 'style': 'form', 'explode': True }})
    traffic_direction: GetCreateTrafficMirrorFilterRuleTrafficDirectionEnum = field(metadata={'query_param': { 'field_name': 'TrafficDirection', 'style': 'form', 'explode': True }})
    traffic_mirror_filter_id: str = field(metadata={'query_param': { 'field_name': 'TrafficMirrorFilterId', 'style': 'form', 'explode': True }})
    version: GetCreateTrafficMirrorFilterRuleVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    client_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ClientToken', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Description', 'style': 'form', 'explode': True }})
    destination_port_range: Optional[GetCreateTrafficMirrorFilterRuleDestinationPortRange] = field(default=None, metadata={'query_param': { 'field_name': 'DestinationPortRange', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    protocol: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Protocol', 'style': 'form', 'explode': True }})
    source_port_range: Optional[GetCreateTrafficMirrorFilterRuleSourcePortRange] = field(default=None, metadata={'query_param': { 'field_name': 'SourcePortRange', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateTrafficMirrorFilterRuleHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCreateTrafficMirrorFilterRuleRequest:
    headers: GetCreateTrafficMirrorFilterRuleHeaders = field()
    query_params: GetCreateTrafficMirrorFilterRuleQueryParams = field()
    

@dataclass
class GetCreateTrafficMirrorFilterRuleResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
