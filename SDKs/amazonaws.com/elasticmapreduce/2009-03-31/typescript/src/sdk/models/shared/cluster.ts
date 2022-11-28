import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Application } from "./application";
import { Configuration } from "./configuration";
import { Ec2InstanceAttributes } from "./ec2instanceattributes";
import { InstanceCollectionTypeEnum } from "./instancecollectiontypeenum";
import { KerberosAttributes } from "./kerberosattributes";
import { PlacementGroupConfig } from "./placementgroupconfig";
import { RepoUpgradeOnBootEnum } from "./repoupgradeonbootenum";
import { ScaleDownBehaviorEnum } from "./scaledownbehaviorenum";
import { ClusterStatus } from "./clusterstatus";
import { Tag } from "./tag";



// Cluster
/** 
 * The detailed description of the cluster.
**/
export class Cluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Applications", elemType: Application })
  applications?: Application[];

  @SpeakeasyMetadata({ data: "json, name=AutoScalingRole" })
  autoScalingRole?: string;

  @SpeakeasyMetadata({ data: "json, name=AutoTerminate" })
  autoTerminate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ClusterArn" })
  clusterArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Configurations", elemType: Configuration })
  configurations?: Configuration[];

  @SpeakeasyMetadata({ data: "json, name=CustomAmiId" })
  customAmiId?: string;

  @SpeakeasyMetadata({ data: "json, name=EbsRootVolumeSize" })
  ebsRootVolumeSize?: number;

  @SpeakeasyMetadata({ data: "json, name=Ec2InstanceAttributes" })
  ec2InstanceAttributes?: Ec2InstanceAttributes;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceCollectionType" })
  instanceCollectionType?: InstanceCollectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=KerberosAttributes" })
  kerberosAttributes?: KerberosAttributes;

  @SpeakeasyMetadata({ data: "json, name=LogEncryptionKmsKeyId" })
  logEncryptionKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=LogUri" })
  logUri?: string;

  @SpeakeasyMetadata({ data: "json, name=MasterPublicDnsName" })
  masterPublicDnsName?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NormalizedInstanceHours" })
  normalizedInstanceHours?: number;

  @SpeakeasyMetadata({ data: "json, name=OutpostArn" })
  outpostArn?: string;

  @SpeakeasyMetadata({ data: "json, name=PlacementGroups", elemType: PlacementGroupConfig })
  placementGroups?: PlacementGroupConfig[];

  @SpeakeasyMetadata({ data: "json, name=ReleaseLabel" })
  releaseLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=RepoUpgradeOnBoot" })
  repoUpgradeOnBoot?: RepoUpgradeOnBootEnum;

  @SpeakeasyMetadata({ data: "json, name=RequestedAmiVersion" })
  requestedAmiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=RunningAmiVersion" })
  runningAmiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=ScaleDownBehavior" })
  scaleDownBehavior?: ScaleDownBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=SecurityConfiguration" })
  securityConfiguration?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceRole" })
  serviceRole?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ClusterStatus;

  @SpeakeasyMetadata({ data: "json, name=StepConcurrencyLevel" })
  stepConcurrencyLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=TerminationProtected" })
  terminationProtected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=VisibleToAllUsers" })
  visibleToAllUsers?: boolean;
}
