import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CancelDeploymentPathParams extends SpeakeasyBase {
    deploymentId: string;
}
export declare class CancelDeploymentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelDeploymentRequest extends SpeakeasyBase {
    pathParams: CancelDeploymentPathParams;
    headers: CancelDeploymentHeaders;
}
export declare class CancelDeploymentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    cancelDeploymentResponse?: shared.CancelDeploymentResponse;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
