from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import application
from . import configuration
from . import ec2instanceattributes
from . import instancecollectiontype_enum
from . import kerberosattributes
from . import placementgroupconfig
from . import repoupgradeonboot_enum
from . import scaledownbehavior_enum
from . import clusterstatus
from . import tag


@dataclass_json
@dataclass
class Cluster:
    applications: Optional[List[application.Application]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Applications' }})
    auto_scaling_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingRole' }})
    auto_terminate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoTerminate' }})
    cluster_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterArn' }})
    configurations: Optional[List[configuration.Configuration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Configurations' }})
    custom_ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomAmiId' }})
    ebs_root_volume_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EbsRootVolumeSize' }})
    ec2_instance_attributes: Optional[ec2instanceattributes.Ec2InstanceAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ec2InstanceAttributes' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    instance_collection_type: Optional[instancecollectiontype_enum.InstanceCollectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceCollectionType' }})
    kerberos_attributes: Optional[kerberosattributes.KerberosAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KerberosAttributes' }})
    log_encryption_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogEncryptionKmsKeyId' }})
    log_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogUri' }})
    master_public_dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MasterPublicDnsName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    normalized_instance_hours: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NormalizedInstanceHours' }})
    outpost_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutpostArn' }})
    placement_groups: Optional[List[placementgroupconfig.PlacementGroupConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlacementGroups' }})
    release_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReleaseLabel' }})
    repo_upgrade_on_boot: Optional[repoupgradeonboot_enum.RepoUpgradeOnBootEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepoUpgradeOnBoot' }})
    requested_ami_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestedAmiVersion' }})
    running_ami_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunningAmiVersion' }})
    scale_down_behavior: Optional[scaledownbehavior_enum.ScaleDownBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScaleDownBehavior' }})
    security_configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityConfiguration' }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceRole' }})
    status: Optional[clusterstatus.ClusterStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    step_concurrency_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepConcurrencyLevel' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    termination_protected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TerminationProtected' }})
    visible_to_all_users: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VisibleToAllUsers' }})
    
