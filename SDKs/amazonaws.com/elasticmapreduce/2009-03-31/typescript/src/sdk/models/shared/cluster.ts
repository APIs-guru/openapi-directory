import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=Applications", elemType: shared.Application })
  applications?: Application[];

  @Metadata({ data: "json, name=AutoScalingRole" })
  autoScalingRole?: string;

  @Metadata({ data: "json, name=AutoTerminate" })
  autoTerminate?: boolean;

  @Metadata({ data: "json, name=ClusterArn" })
  clusterArn?: string;

  @Metadata({ data: "json, name=Configurations", elemType: shared.Configuration })
  configurations?: Configuration[];

  @Metadata({ data: "json, name=CustomAmiId" })
  customAmiId?: string;

  @Metadata({ data: "json, name=EbsRootVolumeSize" })
  ebsRootVolumeSize?: number;

  @Metadata({ data: "json, name=Ec2InstanceAttributes" })
  ec2InstanceAttributes?: Ec2InstanceAttributes;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=InstanceCollectionType" })
  instanceCollectionType?: InstanceCollectionTypeEnum;

  @Metadata({ data: "json, name=KerberosAttributes" })
  kerberosAttributes?: KerberosAttributes;

  @Metadata({ data: "json, name=LogEncryptionKmsKeyId" })
  logEncryptionKmsKeyId?: string;

  @Metadata({ data: "json, name=LogUri" })
  logUri?: string;

  @Metadata({ data: "json, name=MasterPublicDnsName" })
  masterPublicDnsName?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=NormalizedInstanceHours" })
  normalizedInstanceHours?: number;

  @Metadata({ data: "json, name=OutpostArn" })
  outpostArn?: string;

  @Metadata({ data: "json, name=PlacementGroups", elemType: shared.PlacementGroupConfig })
  placementGroups?: PlacementGroupConfig[];

  @Metadata({ data: "json, name=ReleaseLabel" })
  releaseLabel?: string;

  @Metadata({ data: "json, name=RepoUpgradeOnBoot" })
  repoUpgradeOnBoot?: RepoUpgradeOnBootEnum;

  @Metadata({ data: "json, name=RequestedAmiVersion" })
  requestedAmiVersion?: string;

  @Metadata({ data: "json, name=RunningAmiVersion" })
  runningAmiVersion?: string;

  @Metadata({ data: "json, name=ScaleDownBehavior" })
  scaleDownBehavior?: ScaleDownBehaviorEnum;

  @Metadata({ data: "json, name=SecurityConfiguration" })
  securityConfiguration?: string;

  @Metadata({ data: "json, name=ServiceRole" })
  serviceRole?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ClusterStatus;

  @Metadata({ data: "json, name=StepConcurrencyLevel" })
  stepConcurrencyLevel?: number;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TerminationProtected" })
  terminationProtected?: boolean;

  @Metadata({ data: "json, name=VisibleToAllUsers" })
  visibleToAllUsers?: boolean;
}
