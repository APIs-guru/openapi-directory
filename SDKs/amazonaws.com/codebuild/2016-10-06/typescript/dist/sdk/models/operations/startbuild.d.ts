import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartBuildXAmzTargetEnum {
    CodeBuild20161006StartBuild = "CodeBuild_20161006.StartBuild"
}
export declare class StartBuildHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartBuildXAmzTargetEnum;
}
export declare class StartBuildRequest extends SpeakeasyBase {
    headers: StartBuildHeaders;
    request: shared.StartBuildInput;
}
export declare class StartBuildResponse extends SpeakeasyBase {
    accountLimitExceededException?: any;
    contentType: string;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    startBuildOutput?: shared.StartBuildOutput;
    statusCode: number;
}
