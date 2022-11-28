import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDeploymentPathParams extends SpeakeasyBase {
    apiId: string;
    deploymentId: string;
}
export declare class UpdateDeploymentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDeploymentRequestBody extends SpeakeasyBase {
    description?: string;
}
export declare class UpdateDeploymentRequest extends SpeakeasyBase {
    pathParams: UpdateDeploymentPathParams;
    headers: UpdateDeploymentHeaders;
    request: UpdateDeploymentRequestBody;
}
export declare class UpdateDeploymentResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateDeploymentResponse?: shared.UpdateDeploymentResponse;
}
