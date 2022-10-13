from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import amitypes_enum
from . import capacitytypes_enum
from . import nodegrouphealth
from . import launchtemplatespecification
from . import remoteaccessconfig
from . import nodegroupresources
from . import nodegroupscalingconfig
from . import nodegroupstatus_enum
from . import taint
from . import nodegroupupdateconfig


@dataclass_json
@dataclass
class Nodegroup:
    ami_type: Optional[amitypes_enum.AmiTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amiType' }})
    capacity_type: Optional[capacitytypes_enum.CapacityTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacityType' }})
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterName' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disk_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskSize' }})
    health: Optional[nodegrouphealth.NodegroupHealth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health' }})
    instance_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceTypes' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    launch_template: Optional[launchtemplatespecification.LaunchTemplateSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchTemplate' }})
    modified_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    node_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeRole' }})
    nodegroup_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodegroupArn' }})
    nodegroup_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodegroupName' }})
    release_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseVersion' }})
    remote_access: Optional[remoteaccessconfig.RemoteAccessConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteAccess' }})
    resources: Optional[nodegroupresources.NodegroupResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    scaling_config: Optional[nodegroupscalingconfig.NodegroupScalingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scalingConfig' }})
    status: Optional[nodegroupstatus_enum.NodegroupStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    subnets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnets' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    taints: Optional[List[taint.Taint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taints' }})
    update_config: Optional[nodegroupupdateconfig.NodegroupUpdateConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateConfig' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
