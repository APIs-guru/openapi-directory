import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeCodeReviewPathParams extends SpeakeasyBase {
    codeReviewArn: string;
}
export declare class DescribeCodeReviewHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeCodeReviewRequest extends SpeakeasyBase {
    pathParams: DescribeCodeReviewPathParams;
    headers: DescribeCodeReviewHeaders;
}
export declare class DescribeCodeReviewResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeCodeReviewResponse?: shared.DescribeCodeReviewResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
