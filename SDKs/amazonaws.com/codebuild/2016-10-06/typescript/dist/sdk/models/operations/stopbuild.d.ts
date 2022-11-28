import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopBuildXAmzTargetEnum {
    CodeBuild20161006StopBuild = "CodeBuild_20161006.StopBuild"
}
export declare class StopBuildHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopBuildXAmzTargetEnum;
}
export declare class StopBuildRequest extends SpeakeasyBase {
    headers: StopBuildHeaders;
    request: shared.StopBuildInput;
}
export declare class StopBuildResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    stopBuildOutput?: shared.StopBuildOutput;
}
