import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateServiceXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113CreateService = "AmazonEC2ContainerServiceV20141113.CreateService"
}
export declare class CreateServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateServiceXAmzTargetEnum;
}
export declare class CreateServiceRequest extends SpeakeasyBase {
    headers: CreateServiceHeaders;
    request: shared.CreateServiceRequest;
}
export declare class CreateServiceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    clientException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    createServiceResponse?: shared.CreateServiceResponse;
    invalidParameterException?: any;
    platformTaskDefinitionIncompatibilityException?: any;
    platformUnknownException?: any;
    serverException?: any;
    statusCode: number;
    unsupportedFeatureException?: any;
}
