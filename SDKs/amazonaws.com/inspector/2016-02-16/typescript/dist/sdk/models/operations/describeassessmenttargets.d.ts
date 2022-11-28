import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAssessmentTargetsXAmzTargetEnum {
    InspectorServiceDescribeAssessmentTargets = "InspectorService.DescribeAssessmentTargets"
}
export declare class DescribeAssessmentTargetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAssessmentTargetsXAmzTargetEnum;
}
export declare class DescribeAssessmentTargetsRequest extends SpeakeasyBase {
    headers: DescribeAssessmentTargetsHeaders;
    request: shared.DescribeAssessmentTargetsRequest;
}
export declare class DescribeAssessmentTargetsResponse extends SpeakeasyBase {
    contentType: string;
    describeAssessmentTargetsResponse?: shared.DescribeAssessmentTargetsResponse;
    internalException?: any;
    invalidInputException?: any;
    statusCode: number;
}
