import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RetryBuildXAmzTargetEnum {
    CodeBuild20161006RetryBuild = "CodeBuild_20161006.RetryBuild"
}
export declare class RetryBuildHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RetryBuildXAmzTargetEnum;
}
export declare class RetryBuildRequest extends SpeakeasyBase {
    headers: RetryBuildHeaders;
    request: shared.RetryBuildInput;
}
export declare class RetryBuildResponse extends SpeakeasyBase {
    accountLimitExceededException?: any;
    contentType: string;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    retryBuildOutput?: shared.RetryBuildOutput;
    statusCode: number;
}
