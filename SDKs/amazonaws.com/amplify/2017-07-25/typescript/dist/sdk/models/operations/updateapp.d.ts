import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAppPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class UpdateAppHeaders extends SpeakeasyBase {
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
export declare class UpdateAppRequestBodyAutoBranchCreationConfig extends SpeakeasyBase {
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
export declare enum UpdateAppRequestBodyPlatformEnum {
    Web = "WEB"
}
export declare class UpdateAppRequestBody extends SpeakeasyBase {
    accessToken?: string;
    autoBranchCreationConfig?: UpdateAppRequestBodyAutoBranchCreationConfig;
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
    name?: string;
    oauthToken?: string;
    platform?: UpdateAppRequestBodyPlatformEnum;
    repository?: string;
}
export declare class UpdateAppRequest extends SpeakeasyBase {
    pathParams: UpdateAppPathParams;
    headers: UpdateAppHeaders;
    request: UpdateAppRequestBody;
}
export declare class UpdateAppResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
    updateAppResult?: shared.UpdateAppResult;
}
