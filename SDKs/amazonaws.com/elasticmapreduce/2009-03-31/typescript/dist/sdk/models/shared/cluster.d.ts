import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * The detailed description of the cluster.
**/
export declare class Cluster extends SpeakeasyBase {
    applications?: Application[];
    autoScalingRole?: string;
    autoTerminate?: boolean;
    clusterArn?: string;
    configurations?: Configuration[];
    customAmiId?: string;
    ebsRootVolumeSize?: number;
    ec2InstanceAttributes?: Ec2InstanceAttributes;
    id?: string;
    instanceCollectionType?: InstanceCollectionTypeEnum;
    kerberosAttributes?: KerberosAttributes;
    logEncryptionKmsKeyId?: string;
    logUri?: string;
    masterPublicDnsName?: string;
    name?: string;
    normalizedInstanceHours?: number;
    outpostArn?: string;
    placementGroups?: PlacementGroupConfig[];
    releaseLabel?: string;
    repoUpgradeOnBoot?: RepoUpgradeOnBootEnum;
    requestedAmiVersion?: string;
    runningAmiVersion?: string;
    scaleDownBehavior?: ScaleDownBehaviorEnum;
    securityConfiguration?: string;
    serviceRole?: string;
    status?: ClusterStatus;
    stepConcurrencyLevel?: number;
    tags?: Tag[];
    terminationProtected?: boolean;
    visibleToAllUsers?: boolean;
}
