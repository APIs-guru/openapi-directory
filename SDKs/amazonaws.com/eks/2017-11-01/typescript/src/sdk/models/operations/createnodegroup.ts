import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateNodegroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class CreateNodegroupHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum CreateNodegroupRequestBodyAmiTypeEnum {
    Al2X8664 = "AL2_x86_64",
    Al2X8664Gpu = "AL2_x86_64_GPU",
    Al2Arm64 = "AL2_ARM_64",
    Custom = "CUSTOM"
}

export enum CreateNodegroupRequestBodyCapacityTypeEnum {
    OnDemand = "ON_DEMAND",
    Spot = "SPOT"
}


// CreateNodegroupRequestBodyLaunchTemplate
/** 
 * <p>An object representing a node group launch template specification. The launch template cannot include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html"> <code>RequestSpotInstances</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html"> <code>HibernationOptions</code> </a>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.</p> <p>Specify either <code>name</code> or <code>id</code>, but not both.</p>
**/
export class CreateNodegroupRequestBodyLaunchTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


// CreateNodegroupRequestBodyRemoteAccess
/** 
 * An object representing the remote access configuration for the managed node group.
**/
export class CreateNodegroupRequestBodyRemoteAccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ec2SshKey" })
  ec2SshKey?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceSecurityGroups" })
  sourceSecurityGroups?: string[];
}


// CreateNodegroupRequestBodyScalingConfig
/** 
 * An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.
**/
export class CreateNodegroupRequestBodyScalingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desiredSize" })
  desiredSize?: number;

  @SpeakeasyMetadata({ data: "json, name=maxSize" })
  maxSize?: number;

  @SpeakeasyMetadata({ data: "json, name=minSize" })
  minSize?: number;
}


// CreateNodegroupRequestBodyUpdateConfig
/** 
 * The node group update configuration.
**/
export class CreateNodegroupRequestBodyUpdateConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxUnavailable" })
  maxUnavailable?: number;

  @SpeakeasyMetadata({ data: "json, name=maxUnavailablePercentage" })
  maxUnavailablePercentage?: number;
}


export class CreateNodegroupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amiType" })
  amiType?: CreateNodegroupRequestBodyAmiTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=capacityType" })
  capacityType?: CreateNodegroupRequestBodyCapacityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=diskSize" })
  diskSize?: number;

  @SpeakeasyMetadata({ data: "json, name=instanceTypes" })
  instanceTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=launchTemplate" })
  launchTemplate?: CreateNodegroupRequestBodyLaunchTemplate;

  @SpeakeasyMetadata({ data: "json, name=nodeRole" })
  nodeRole: string;

  @SpeakeasyMetadata({ data: "json, name=nodegroupName" })
  nodegroupName: string;

  @SpeakeasyMetadata({ data: "json, name=releaseVersion" })
  releaseVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=remoteAccess" })
  remoteAccess?: CreateNodegroupRequestBodyRemoteAccess;

  @SpeakeasyMetadata({ data: "json, name=scalingConfig" })
  scalingConfig?: CreateNodegroupRequestBodyScalingConfig;

  @SpeakeasyMetadata({ data: "json, name=subnets" })
  subnets: string[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=taints", elemType: shared.Taint })
  taints?: shared.Taint[];

  @SpeakeasyMetadata({ data: "json, name=updateConfig" })
  updateConfig?: CreateNodegroupRequestBodyUpdateConfig;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


export class CreateNodegroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNodegroupPathParams;

  @SpeakeasyMetadata()
  headers: CreateNodegroupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNodegroupRequestBody;
}


export class CreateNodegroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createNodegroupResponse?: shared.CreateNodegroupResponse;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  resourceLimitExceededException?: any;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
