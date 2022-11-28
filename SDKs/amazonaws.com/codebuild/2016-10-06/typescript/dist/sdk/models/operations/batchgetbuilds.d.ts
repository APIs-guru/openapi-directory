import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetBuildsXAmzTargetEnum {
    CodeBuild20161006BatchGetBuilds = "CodeBuild_20161006.BatchGetBuilds"
}
export declare class BatchGetBuildsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetBuildsXAmzTargetEnum;
}
export declare class BatchGetBuildsRequest extends SpeakeasyBase {
    headers: BatchGetBuildsHeaders;
    request: shared.BatchGetBuildsInput;
}
export declare class BatchGetBuildsResponse extends SpeakeasyBase {
    batchGetBuildsOutput?: shared.BatchGetBuildsOutput;
    contentType: string;
    invalidInputException?: any;
    statusCode: number;
}
