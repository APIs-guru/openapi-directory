import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDeploymentPathParams extends SpeakeasyBase {
    appId: string;
    branchName: string;
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
    fileMap?: Map<string, string>;
}
export declare class CreateDeploymentRequest extends SpeakeasyBase {
    pathParams: CreateDeploymentPathParams;
    headers: CreateDeploymentHeaders;
    request: CreateDeploymentRequestBody;
}
export declare class CreateDeploymentResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createDeploymentResult?: shared.CreateDeploymentResult;
    internalFailureException?: any;
    limitExceededException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
