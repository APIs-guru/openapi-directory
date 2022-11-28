import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=amiType" })
  amiType?: AmiTypesEnum;

  @SpeakeasyMetadata({ data: "json, name=capacityType" })
  capacityType?: CapacityTypesEnum;

  @SpeakeasyMetadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=diskSize" })
  diskSize?: number;

  @SpeakeasyMetadata({ data: "json, name=health" })
  health?: NodegroupHealth;

  @SpeakeasyMetadata({ data: "json, name=instanceTypes" })
  instanceTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=launchTemplate" })
  launchTemplate?: LaunchTemplateSpecification;

  @SpeakeasyMetadata({ data: "json, name=modifiedAt" })
  modifiedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=nodeRole" })
  nodeRole?: string;

  @SpeakeasyMetadata({ data: "json, name=nodegroupArn" })
  nodegroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=nodegroupName" })
  nodegroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=releaseVersion" })
  releaseVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=remoteAccess" })
  remoteAccess?: RemoteAccessConfig;

  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources?: NodegroupResources;

  @SpeakeasyMetadata({ data: "json, name=scalingConfig" })
  scalingConfig?: NodegroupScalingConfig;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: NodegroupStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subnets" })
  subnets?: string[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=taints", elemType: Taint })
  taints?: Taint[];

  @SpeakeasyMetadata({ data: "json, name=updateConfig" })
  updateConfig?: NodegroupUpdateConfig;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
