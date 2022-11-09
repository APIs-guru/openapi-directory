import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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


// Nodegroup
/** 
 * An object representing an Amazon EKS managed node group.
**/
export class Nodegroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=amiType" })
  amiType?: AmiTypesEnum;

  @Metadata({ data: "json, name=capacityType" })
  capacityType?: CapacityTypesEnum;

  @Metadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=diskSize" })
  diskSize?: number;

  @Metadata({ data: "json, name=health" })
  health?: NodegroupHealth;

  @Metadata({ data: "json, name=instanceTypes" })
  instanceTypes?: string[];

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=launchTemplate" })
  launchTemplate?: LaunchTemplateSpecification;

  @Metadata({ data: "json, name=modifiedAt" })
  modifiedAt?: Date;

  @Metadata({ data: "json, name=nodeRole" })
  nodeRole?: string;

  @Metadata({ data: "json, name=nodegroupArn" })
  nodegroupArn?: string;

  @Metadata({ data: "json, name=nodegroupName" })
  nodegroupName?: string;

  @Metadata({ data: "json, name=releaseVersion" })
  releaseVersion?: string;

  @Metadata({ data: "json, name=remoteAccess" })
  remoteAccess?: RemoteAccessConfig;

  @Metadata({ data: "json, name=resources" })
  resources?: NodegroupResources;

  @Metadata({ data: "json, name=scalingConfig" })
  scalingConfig?: NodegroupScalingConfig;

  @Metadata({ data: "json, name=status" })
  status?: NodegroupStatusEnum;

  @Metadata({ data: "json, name=subnets" })
  subnets?: string[];

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=taints", elemType: shared.Taint })
  taints?: Taint[];

  @Metadata({ data: "json, name=updateConfig" })
  updateConfig?: NodegroupUpdateConfig;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
