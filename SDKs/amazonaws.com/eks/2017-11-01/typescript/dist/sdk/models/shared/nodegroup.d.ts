import { SpeakeasyBase } from "../../../internal/utils";
import { AmiTypesEnum } from "./amitypesenum";
import { CapacityTypesEnum } from "./capacitytypesenum";
import { NodegroupHealth } from "./nodegrouphealth";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
import { RemoteAccessConfig } from "./remoteaccessconfig";
import { NodegroupResources } from "./nodegroupresources";
import { NodegroupScalingConfig } from "./nodegroupscalingconfig";
import { NodegroupStatusEnum } from "./nodegroupstatusenum";
import { Taint } from "./taint";
import { NodegroupUpdateConfig } from "./nodegroupupdateconfig";
/**
 * An object representing an Amazon EKS managed node group.
**/
export declare class Nodegroup extends SpeakeasyBase {
    amiType?: AmiTypesEnum;
    capacityType?: CapacityTypesEnum;
    clusterName?: string;
    createdAt?: Date;
    diskSize?: number;
    health?: NodegroupHealth;
    instanceTypes?: string[];
    labels?: Map<string, string>;
    launchTemplate?: LaunchTemplateSpecification;
    modifiedAt?: Date;
    nodeRole?: string;
    nodegroupArn?: string;
    nodegroupName?: string;
    releaseVersion?: string;
    remoteAccess?: RemoteAccessConfig;
    resources?: NodegroupResources;
    scalingConfig?: NodegroupScalingConfig;
    status?: NodegroupStatusEnum;
    subnets?: string[];
    tags?: Map<string, string>;
    taints?: Taint[];
    updateConfig?: NodegroupUpdateConfig;
    version?: string;
}
