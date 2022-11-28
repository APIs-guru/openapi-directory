import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartDeploymentPathParams extends SpeakeasyBase {
    appId: string;
    branchName: string;
}
export declare class StartDeploymentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartDeploymentRequestBody extends SpeakeasyBase {
    jobId?: string;
    sourceUrl?: string;
}
export declare class StartDeploymentRequest extends SpeakeasyBase {
    pathParams: StartDeploymentPathParams;
    headers: StartDeploymentHeaders;
    request: StartDeploymentRequestBody;
}
export declare class StartDeploymentResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    startDeploymentResult?: shared.StartDeploymentResult;
    statusCode: number;
    unauthorizedException?: any;
}
