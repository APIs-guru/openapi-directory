import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeExclusionsXAmzTargetEnum {
    InspectorServiceDescribeExclusions = "InspectorService.DescribeExclusions"
}
export declare class DescribeExclusionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeExclusionsXAmzTargetEnum;
}
export declare class DescribeExclusionsRequest extends SpeakeasyBase {
    headers: DescribeExclusionsHeaders;
    request: shared.DescribeExclusionsRequest;
}
export declare class DescribeExclusionsResponse extends SpeakeasyBase {
    contentType: string;
    describeExclusionsResponse?: shared.DescribeExclusionsResponse;
    internalException?: any;
    invalidInputException?: any;
    statusCode: number;
}
