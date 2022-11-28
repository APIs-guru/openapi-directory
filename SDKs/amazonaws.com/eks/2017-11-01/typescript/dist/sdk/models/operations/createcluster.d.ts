import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The Kubernetes network configuration for the cluster.
**/
export declare class CreateClusterRequestBodyKubernetesNetworkConfig extends SpeakeasyBase {
    serviceIpv4Cidr?: string;
}
/**
 * An object representing the logging configuration for resources in your cluster.
**/
export declare class CreateClusterRequestBodyLogging extends SpeakeasyBase {
    clusterLogging?: shared.LogSetup[];
}
/**
 * An object representing the VPC configuration to use for an Amazon EKS cluster.
**/
export declare class CreateClusterRequestBodyResourcesVpcConfig extends SpeakeasyBase {
    endpointPrivateAccess?: boolean;
    endpointPublicAccess?: boolean;
    publicAccessCidrs?: string[];
    securityGroupIds?: string[];
    subnetIds?: string[];
}
export declare class CreateClusterRequestBody extends SpeakeasyBase {
    clientRequestToken?: string;
    encryptionConfig?: shared.EncryptionConfig[];
    kubernetesNetworkConfig?: CreateClusterRequestBodyKubernetesNetworkConfig;
    logging?: CreateClusterRequestBodyLogging;
    name: string;
    resourcesVpcConfig: CreateClusterRequestBodyResourcesVpcConfig;
    roleArn: string;
    tags?: Map<string, string>;
    version?: string;
}
export declare class CreateClusterRequest extends SpeakeasyBase {
    headers: CreateClusterHeaders;
    request: CreateClusterRequestBody;
}
export declare class CreateClusterResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    createClusterResponse?: shared.CreateClusterResponse;
    invalidParameterException?: any;
    resourceInUseException?: any;
    resourceLimitExceededException?: any;
    serverException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    unsupportedAvailabilityZoneException?: any;
}
