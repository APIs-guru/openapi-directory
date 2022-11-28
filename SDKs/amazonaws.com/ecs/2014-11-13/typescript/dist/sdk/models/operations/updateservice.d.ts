import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateServiceXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113UpdateService = "AmazonEC2ContainerServiceV20141113.UpdateService"
}
export declare class UpdateServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServiceXAmzTargetEnum;
}
export declare class UpdateServiceRequest extends SpeakeasyBase {
    headers: UpdateServiceHeaders;
    request: shared.UpdateServiceRequest;
}
export declare class UpdateServiceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    clientException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    invalidParameterException?: any;
    platformTaskDefinitionIncompatibilityException?: any;
    platformUnknownException?: any;
    serverException?: any;
    serviceNotActiveException?: any;
    serviceNotFoundException?: any;
    statusCode: number;
    updateServiceResponse?: shared.UpdateServiceResponse;
}
