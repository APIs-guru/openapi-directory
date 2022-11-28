from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Cluster:
    r"""Cluster
    The detailed description of the cluster.
    """
    
    applications: Optional[List[Application]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Applications') }})
    auto_scaling_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingRole') }})
    auto_terminate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoTerminate') }})
    cluster_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterArn') }})
    configurations: Optional[List[Configuration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configurations') }})
    custom_ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomAmiId') }})
    ebs_root_volume_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EbsRootVolumeSize') }})
    ec2_instance_attributes: Optional[Ec2InstanceAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ec2InstanceAttributes') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    instance_collection_type: Optional[InstanceCollectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceCollectionType') }})
    kerberos_attributes: Optional[KerberosAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KerberosAttributes') }})
    log_encryption_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogEncryptionKmsKeyId') }})
    log_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogUri') }})
    master_public_dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MasterPublicDnsName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    normalized_instance_hours: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NormalizedInstanceHours') }})
    outpost_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutpostArn') }})
    placement_groups: Optional[List[PlacementGroupConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlacementGroups') }})
    release_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReleaseLabel') }})
    repo_upgrade_on_boot: Optional[RepoUpgradeOnBootEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepoUpgradeOnBoot') }})
    requested_ami_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestedAmiVersion') }})
    running_ami_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunningAmiVersion') }})
    scale_down_behavior: Optional[ScaleDownBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScaleDownBehavior') }})
    security_configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityConfiguration') }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceRole') }})
    status: Optional[ClusterStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    step_concurrency_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepConcurrencyLevel') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    termination_protected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TerminationProtected') }})
    visible_to_all_users: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VisibleToAllUsers') }})
    
