import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDeploymentPathParams extends SpeakeasyBase {
    deploymentId: string;
    restapiId: string;
}
export declare class GetDeploymentQueryParams extends SpeakeasyBase {
    embed?: string[];
}
export declare class GetDeploymentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeploymentRequest extends SpeakeasyBase {
    pathParams: GetDeploymentPathParams;
    queryParams: GetDeploymentQueryParams;
    headers: GetDeploymentHeaders;
}
export declare class GetDeploymentResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deployment?: shared.Deployment;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
