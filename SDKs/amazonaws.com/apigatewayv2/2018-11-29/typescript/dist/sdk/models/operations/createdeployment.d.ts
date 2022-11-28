import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDeploymentPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class CreateDeploymentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDeploymentRequestBody extends SpeakeasyBase {
    description?: string;
    stageName?: string;
}
export declare class CreateDeploymentRequest extends SpeakeasyBase {
    pathParams: CreateDeploymentPathParams;
    headers: CreateDeploymentHeaders;
    request: CreateDeploymentRequestBody;
}
export declare class CreateDeploymentResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createDeploymentResponse?: shared.CreateDeploymentResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
