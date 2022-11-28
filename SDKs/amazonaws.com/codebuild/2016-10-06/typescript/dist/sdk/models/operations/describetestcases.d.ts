import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeTestCasesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeTestCasesXAmzTargetEnum {
    CodeBuild20161006DescribeTestCases = "CodeBuild_20161006.DescribeTestCases"
}
export declare class DescribeTestCasesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTestCasesXAmzTargetEnum;
}
export declare class DescribeTestCasesRequest extends SpeakeasyBase {
    queryParams: DescribeTestCasesQueryParams;
    headers: DescribeTestCasesHeaders;
    request: shared.DescribeTestCasesInput;
}
export declare class DescribeTestCasesResponse extends SpeakeasyBase {
    contentType: string;
    describeTestCasesOutput?: shared.DescribeTestCasesOutput;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
