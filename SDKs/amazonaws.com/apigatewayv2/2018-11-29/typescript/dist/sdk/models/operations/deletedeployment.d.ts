import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteDeploymentPathParams extends SpeakeasyBase {
    apiId: string;
    deploymentId: string;
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
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
