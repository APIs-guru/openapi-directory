import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetReportsXAmzTargetEnum {
    CodeBuild20161006BatchGetReports = "CodeBuild_20161006.BatchGetReports"
}
export declare class BatchGetReportsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetReportsXAmzTargetEnum;
}
export declare class BatchGetReportsRequest extends SpeakeasyBase {
    headers: BatchGetReportsHeaders;
    request: shared.BatchGetReportsInput;
}
export declare class BatchGetReportsResponse extends SpeakeasyBase {
    batchGetReportsOutput?: shared.BatchGetReportsOutput;
    contentType: string;
    invalidInputException?: any;
    statusCode: number;
}
