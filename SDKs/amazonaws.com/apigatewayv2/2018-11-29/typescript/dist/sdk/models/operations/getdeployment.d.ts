import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDeploymentPathParams extends SpeakeasyBase {
    apiId: string;
    deploymentId: string;
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
    headers: GetDeploymentHeaders;
}
export declare class GetDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    getDeploymentResponse?: shared.GetDeploymentResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
