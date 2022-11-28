import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAssessmentRunsXAmzTargetEnum {
    InspectorServiceDescribeAssessmentRuns = "InspectorService.DescribeAssessmentRuns"
}
export declare class DescribeAssessmentRunsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAssessmentRunsXAmzTargetEnum;
}
export declare class DescribeAssessmentRunsRequest extends SpeakeasyBase {
    headers: DescribeAssessmentRunsHeaders;
    request: shared.DescribeAssessmentRunsRequest;
}
export declare class DescribeAssessmentRunsResponse extends SpeakeasyBase {
    contentType: string;
    describeAssessmentRunsResponse?: shared.DescribeAssessmentRunsResponse;
    internalException?: any;
    invalidInputException?: any;
    statusCode: number;
}
