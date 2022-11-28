import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetReportGroupsXAmzTargetEnum {
    CodeBuild20161006BatchGetReportGroups = "CodeBuild_20161006.BatchGetReportGroups"
}
export declare class BatchGetReportGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetReportGroupsXAmzTargetEnum;
}
export declare class BatchGetReportGroupsRequest extends SpeakeasyBase {
    headers: BatchGetReportGroupsHeaders;
    request: shared.BatchGetReportGroupsInput;
}
export declare class BatchGetReportGroupsResponse extends SpeakeasyBase {
    batchGetReportGroupsOutput?: shared.BatchGetReportGroupsOutput;
    contentType: string;
    invalidInputException?: any;
    statusCode: number;
}
