from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VpcConfigResponse:
    cluster_security_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterSecurityGroupId' }})
    endpoint_private_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointPrivateAccess' }})
    endpoint_public_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointPublicAccess' }})
    public_access_cidrs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicAccessCidrs' }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityGroupIds' }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetIds' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcId' }})
    
