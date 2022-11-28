import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeCodeCoveragesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeCodeCoveragesXAmzTargetEnum {
    CodeBuild20161006DescribeCodeCoverages = "CodeBuild_20161006.DescribeCodeCoverages"
}
export declare class DescribeCodeCoveragesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCodeCoveragesXAmzTargetEnum;
}
export declare class DescribeCodeCoveragesRequest extends SpeakeasyBase {
    queryParams: DescribeCodeCoveragesQueryParams;
    headers: DescribeCodeCoveragesHeaders;
    request: shared.DescribeCodeCoveragesInput;
}
export declare class DescribeCodeCoveragesResponse extends SpeakeasyBase {
    contentType: string;
    describeCodeCoveragesOutput?: shared.DescribeCodeCoveragesOutput;
    invalidInputException?: any;
    statusCode: number;
}
