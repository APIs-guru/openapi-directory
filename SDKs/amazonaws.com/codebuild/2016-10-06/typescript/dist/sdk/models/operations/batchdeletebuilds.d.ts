import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchDeleteBuildsXAmzTargetEnum {
    CodeBuild20161006BatchDeleteBuilds = "CodeBuild_20161006.BatchDeleteBuilds"
}
export declare class BatchDeleteBuildsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDeleteBuildsXAmzTargetEnum;
}
export declare class BatchDeleteBuildsRequest extends SpeakeasyBase {
    headers: BatchDeleteBuildsHeaders;
    request: shared.BatchDeleteBuildsInput;
}
export declare class BatchDeleteBuildsResponse extends SpeakeasyBase {
    batchDeleteBuildsOutput?: shared.BatchDeleteBuildsOutput;
    contentType: string;
    invalidInputException?: any;
    statusCode: number;
}
