import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateClusterConfigPathParams extends SpeakeasyBase {
    name: string;
}
export declare class UpdateClusterConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object representing the logging configuration for resources in your cluster.
**/
export declare class UpdateClusterConfigRequestBodyLogging extends SpeakeasyBase {
    clusterLogging?: shared.LogSetup[];
}
/**
 * An object representing the VPC configuration to use for an Amazon EKS cluster.
**/
export declare class UpdateClusterConfigRequestBodyResourcesVpcConfig extends SpeakeasyBase {
    endpointPrivateAccess?: boolean;
    endpointPublicAccess?: boolean;
    publicAccessCidrs?: string[];
    securityGroupIds?: string[];
    subnetIds?: string[];
}
export declare class UpdateClusterConfigRequestBody extends SpeakeasyBase {
    clientRequestToken?: string;
    logging?: UpdateClusterConfigRequestBodyLogging;
    resourcesVpcConfig?: UpdateClusterConfigRequestBodyResourcesVpcConfig;
}
export declare class UpdateClusterConfigRequest extends SpeakeasyBase {
    pathParams: UpdateClusterConfigPathParams;
    headers: UpdateClusterConfigHeaders;
    request: UpdateClusterConfigRequestBody;
}
export declare class UpdateClusterConfigResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    serverException?: any;
    statusCode: number;
    updateClusterConfigResponse?: shared.UpdateClusterConfigResponse;
}
