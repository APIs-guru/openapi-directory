from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Nodegroup:
    r"""Nodegroup
    An object representing an Amazon EKS managed node group.
    """
    
    ami_type: Optional[AmiTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amiType') }})
    capacity_type: Optional[CapacityTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityType') }})
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterName') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disk_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskSize') }})
    health: Optional[NodegroupHealth] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health') }})
    instance_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceTypes') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    launch_template: Optional[LaunchTemplateSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchTemplate') }})
    modified_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    node_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeRole') }})
    nodegroup_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodegroupArn') }})
    nodegroup_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodegroupName') }})
    release_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseVersion') }})
    remote_access: Optional[RemoteAccessConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteAccess') }})
    resources: Optional[NodegroupResources] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    scaling_config: Optional[NodegroupScalingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scalingConfig') }})
    status: Optional[NodegroupStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subnets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    taints: Optional[List[Taint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taints') }})
    update_config: Optional[NodegroupUpdateConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateConfig') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
