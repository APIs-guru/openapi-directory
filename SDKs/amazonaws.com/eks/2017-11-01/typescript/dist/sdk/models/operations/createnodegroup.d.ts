import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateNodegroupPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CreateNodegroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateNodegroupRequestBodyAmiTypeEnum {
    Al2X8664 = "AL2_x86_64",
    Al2X8664Gpu = "AL2_x86_64_GPU",
    Al2Arm64 = "AL2_ARM_64",
    Custom = "CUSTOM"
}
export declare enum CreateNodegroupRequestBodyCapacityTypeEnum {
    OnDemand = "ON_DEMAND",
    Spot = "SPOT"
}
/**
 * <p>An object representing a node group launch template specification. The launch template cannot include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html"> <code>RequestSpotInstances</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html"> <code>HibernationOptions</code> </a>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.</p> <p>Specify either <code>name</code> or <code>id</code>, but not both.</p>
**/
export declare class CreateNodegroupRequestBodyLaunchTemplate extends SpeakeasyBase {
    id?: string;
    name?: string;
    version?: string;
}
/**
 * An object representing the remote access configuration for the managed node group.
**/
export declare class CreateNodegroupRequestBodyRemoteAccess extends SpeakeasyBase {
    ec2SshKey?: string;
    sourceSecurityGroups?: string[];
}
/**
 * An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.
**/
export declare class CreateNodegroupRequestBodyScalingConfig extends SpeakeasyBase {
    desiredSize?: number;
    maxSize?: number;
    minSize?: number;
}
/**
 * The node group update configuration.
**/
export declare class CreateNodegroupRequestBodyUpdateConfig extends SpeakeasyBase {
    maxUnavailable?: number;
    maxUnavailablePercentage?: number;
}
export declare class CreateNodegroupRequestBody extends SpeakeasyBase {
    amiType?: CreateNodegroupRequestBodyAmiTypeEnum;
    capacityType?: CreateNodegroupRequestBodyCapacityTypeEnum;
    clientRequestToken?: string;
    diskSize?: number;
    instanceTypes?: string[];
    labels?: Map<string, string>;
    launchTemplate?: CreateNodegroupRequestBodyLaunchTemplate;
    nodeRole: string;
    nodegroupName: string;
    releaseVersion?: string;
    remoteAccess?: CreateNodegroupRequestBodyRemoteAccess;
    scalingConfig?: CreateNodegroupRequestBodyScalingConfig;
    subnets: string[];
    tags?: Map<string, string>;
    taints?: shared.Taint[];
    updateConfig?: CreateNodegroupRequestBodyUpdateConfig;
    version?: string;
}
export declare class CreateNodegroupRequest extends SpeakeasyBase {
    pathParams: CreateNodegroupPathParams;
    headers: CreateNodegroupHeaders;
    request: CreateNodegroupRequestBody;
}
export declare class CreateNodegroupResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    createNodegroupResponse?: shared.CreateNodegroupResponse;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceLimitExceededException?: any;
    serverException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
