import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateDeploymentPathParams extends SpeakeasyBase {
    deploymentId: string;
    restapiId: string;
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
    patchOperations?: shared.PatchOperation[];
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
    deployment?: shared.Deployment;
    limitExceededException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
