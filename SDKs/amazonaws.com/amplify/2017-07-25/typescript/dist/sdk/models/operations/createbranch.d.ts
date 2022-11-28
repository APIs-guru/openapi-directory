import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateBranchPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class CreateBranchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateBranchRequestBodyStageEnum {
    Production = "PRODUCTION",
    Beta = "BETA",
    Development = "DEVELOPMENT",
    Experimental = "EXPERIMENTAL",
    PullRequest = "PULL_REQUEST"
}
export declare class CreateBranchRequestBody extends SpeakeasyBase {
    backendEnvironmentArn?: string;
    basicAuthCredentials?: string;
    branchName: string;
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
    stage?: CreateBranchRequestBodyStageEnum;
    tags?: Map<string, string>;
    ttl?: string;
}
export declare class CreateBranchRequest extends SpeakeasyBase {
    pathParams: CreateBranchPathParams;
    headers: CreateBranchHeaders;
    request: CreateBranchRequestBody;
}
export declare class CreateBranchResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createBranchResult?: shared.CreateBranchResult;
    dependentServiceFailureException?: any;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
