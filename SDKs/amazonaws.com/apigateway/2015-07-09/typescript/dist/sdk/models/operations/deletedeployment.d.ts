import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteDeploymentPathParams extends SpeakeasyBase {
    deploymentId: string;
    restapiId: string;
}
export declare class DeleteDeploymentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteDeploymentRequest extends SpeakeasyBase {
    pathParams: DeleteDeploymentPathParams;
    headers: DeleteDeploymentHeaders;
}
export declare class DeleteDeploymentResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
