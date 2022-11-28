import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateBranchPathParams extends SpeakeasyBase {
    appId: string;
    branchName: string;
}
export declare class UpdateBranchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateBranchRequestBodyStageEnum {
    Production = "PRODUCTION",
    Beta = "BETA",
    Development = "DEVELOPMENT",
    Experimental = "EXPERIMENTAL",
    PullRequest = "PULL_REQUEST"
}
export declare class UpdateBranchRequestBody extends SpeakeasyBase {
    backendEnvironmentArn?: string;
    basicAuthCredentials?: string;
    buildSpec?: string;
    description?: string;
    displayName?: string;
    enableAutoBuild?: boolean;
    enableBasicAuth?: boolean;
    enableNotification?: boolean;
    enablePerformanceMode?: boolean;
    enablePullRequestPreview?: boolean;
    environmentVariables?: Map<string, string>;
    framework?: string;
    pullRequestEnvironmentName?: string;
    stage?: UpdateBranchRequestBodyStageEnum;
    ttl?: string;
}
export declare class UpdateBranchRequest extends SpeakeasyBase {
    pathParams: UpdateBranchPathParams;
    headers: UpdateBranchHeaders;
    request: UpdateBranchRequestBody;
}
export declare class UpdateBranchResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    dependentServiceFailureException?: any;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
    updateBranchResult?: shared.UpdateBranchResult;
}
