import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDeploymentPathParams extends SpeakeasyBase {
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
    accessDeniedException?: any;
    contentType: string;
    getDeploymentResponse?: shared.GetDeploymentResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
