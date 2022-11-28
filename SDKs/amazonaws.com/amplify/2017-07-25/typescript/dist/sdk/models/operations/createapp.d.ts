import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAppHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 *  Describes the automated branch creation configuration.
**/
export declare class CreateAppRequestBodyAutoBranchCreationConfig extends SpeakeasyBase {
    basicAuthCredentials?: string;
    buildSpec?: string;
    enableAutoBuild?: boolean;
    enableBasicAuth?: boolean;
    enablePerformanceMode?: boolean;
    enablePullRequestPreview?: boolean;
    environmentVariables?: Map<string, string>;
    framework?: string;
    pullRequestEnvironmentName?: string;
    stage?: shared.StageEnum;
}
export declare enum CreateAppRequestBodyPlatformEnum {
    Web = "WEB"
}
export declare class CreateAppRequestBody extends SpeakeasyBase {
    accessToken?: string;
    autoBranchCreationConfig?: CreateAppRequestBodyAutoBranchCreationConfig;
    autoBranchCreationPatterns?: string[];
    basicAuthCredentials?: string;
    buildSpec?: string;
    customHeaders?: string;
    customRules?: shared.CustomRule[];
    description?: string;
    enableAutoBranchCreation?: boolean;
    enableBasicAuth?: boolean;
    enableBranchAutoBuild?: boolean;
    enableBranchAutoDeletion?: boolean;
    environmentVariables?: Map<string, string>;
    iamServiceRoleArn?: string;
    name: string;
    oauthToken?: string;
    platform?: CreateAppRequestBodyPlatformEnum;
    repository?: string;
    tags?: Map<string, string>;
}
export declare class CreateAppRequest extends SpeakeasyBase {
    headers: CreateAppHeaders;
    request: CreateAppRequestBody;
}
export declare class CreateAppResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createAppResult?: shared.CreateAppResult;
    dependentServiceFailureException?: any;
    internalFailureException?: any;
    limitExceededException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
