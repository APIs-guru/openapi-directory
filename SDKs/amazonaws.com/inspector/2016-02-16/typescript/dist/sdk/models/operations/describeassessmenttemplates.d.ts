import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAssessmentTemplatesXAmzTargetEnum {
    InspectorServiceDescribeAssessmentTemplates = "InspectorService.DescribeAssessmentTemplates"
}
export declare class DescribeAssessmentTemplatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAssessmentTemplatesXAmzTargetEnum;
}
export declare class DescribeAssessmentTemplatesRequest extends SpeakeasyBase {
    headers: DescribeAssessmentTemplatesHeaders;
    request: shared.DescribeAssessmentTemplatesRequest;
}
export declare class DescribeAssessmentTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    describeAssessmentTemplatesResponse?: shared.DescribeAssessmentTemplatesResponse;
    internalException?: any;
    invalidInputException?: any;
    statusCode: number;
}
